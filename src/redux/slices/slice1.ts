import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// створюю тип для стейту у цьому сласі
type TCounter = {value: number};

// початкове значення для стейту
// редакс робить свій власний стейт на основі цього, тобто цей об'єкт не є самим стейтом, не ним я далі маніпулюю
const initialState: TCounter = {value: 0};

// createSlice створює слайс, ця функція приймає аргументом сконфігурований об'єкт
export const counter1Slice = createSlice({
    // унікальне ім'я
    name: 'slice1',

    // початкове значення стану
    initialState: initialState,

    // редюсери, методи, які будуть маніпулювати станом
    // цей об'єкт містить їх опис
    reducers: {
        increment: state => {
            state.value = state.value + 1;
        },
        decrement: state => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // маніпуляція станом реалізована наступним чином:
            //  - в кожен такий метод приходить мінімум 1 аргумент - стейт
            //  - всього аргументів може бути два, другий аргумент це action
            //    action це об'єкт який містить два поля, корисне навантаження та тип у стрінговому форматі
            //    на скільки я зрозумів то у RTK тип для action вже можна не прописувати самому
            //    ця штука генерується сама із назви поля редюсера

            // далі все просто, витягую потрібне поле зі стану і проводжу з ним маніпуляції використовуючи payload
            state.value = state.value + action.payload;
        },
        reset: state => {
            state.value = 0;
        }
    }
});

// тут експортую готові actions, які RTK сам згенерував
export const {
    increment,
    decrement,
    incrementByAmount,
    reset
} = counter1Slice.actions;