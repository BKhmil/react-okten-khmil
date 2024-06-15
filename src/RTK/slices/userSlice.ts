import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

// тип для стану слайсу юзерів
type TUserSlice = {
    users: IUser[],
    user: IUser | null,
    isLoaded: boolean
}

// початковий стан для слайсу
const userInitState: TUserSlice = {
    users: [],
    user: null,
    isLoaded: false
}

// асинхронна функція створена через createAsyncThunk
const loadUsers = createAsyncThunk(
    // вказання префіксу
    'userSlice/loadUsers',
    // підказка пише що цей аргумент payloadCreator, ну от створюю його
    // він буде асинхронним ясна річ
    async (_, thunkAPI) => {
        // блок трай-кетч для обробки помилок
        try {
            // якщо все гуд то отримую юзерів
            const users = await userService.getAll();

            // через thunkAPI та dispatch викликаю action changeLoadState
            // який встановлює прапорець isLoaded в true, тобто все норм отримали
            thunkAPI.dispatch(userActions.changeLoadState(true));

            // ну і повертає юзерів як fulfillWithValue, тобто вказую, знову-таки, що все гуд
            // + як розумію це треба для addCase'у, щоб він міг оцей fulfill у даного асинхронного екшену відслідкувати
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            // обробка помилки
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

// все те саме
const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    // тільки тут вже перший аргумент юзабельний
    async (id: string | undefined, thunkAPI) => {
        // якщо цей перший аргумент не falsy
        if (id) {
            // то виконується трай-кетч, в якому все так як було у функції вище
            try {
                const user = await userService.getById(+id);
                return thunkAPI.fulfillWithValue(user);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }

        console.log('id is undefined');

        // якщо айді не прийшло, то повертаю null
        return null;
    }
);

// створення самого слайсу
export const userSlice = createSlice({
    // назва
    name: 'userSlice',
    // ініт_стан
    initialState: userInitState,
    // редюсери
    reducers: {
        // в даному випалку тут тільки один є, який відповідає за керуванням полем isLoaded стану юзера
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            // встановлюю прапорець у передаваєме значення
            state.isLoaded = action.payload;
        }
    },
    // поле для асинхронних actions
    // взагалі це ж виглядає як метод, та й по суті є ним
    // він приймає аргументом (об'єкт????) білдер
    // який в свою чергу має потрібні методи для проюзу того що створив createAsyncThunk
    extraReducers: builder =>
        builder
            // addCase додає кейс у відповідності до статусу певного AsyncThunk
            // першим аргументом приймається якраз статус AsyncThunk'у,
            // а другим звичайний редюсер
            // в якому я вже змінюю стан на основі того що прийшло із AsyncThunk у action.payload
            // ну і ще, цей кейс оброблю випадок коли все гуд loadUsers.fulfilled
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            // а цей коли повернувся reject
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loadUserById.rejected, (state, action) => {
                console.log(action.payload);
            })
            // .addMatcher(isFulfilled(loadUsers, loadUserById), (state, action) => {
            //     // state.isLoaded = true;
            // })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
};