import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";
import {postService, userService} from "../../services/api.service";
import {AxiosError} from "axios";

// ВСЕ ОПИСАВ У ЮЗЕР СЛАЙСІ, ТУТ ВСЕ АНАЛОГІЧНО

type TPostSlice = {
    posts: IPost[],
    post: IPost | null,
    isLoaded: boolean
}

const postInitState: TPostSlice = {
    posts: [],
    post: null,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();

            thunkAPI.dispatch(postActions.changeIsLoaded(true));

            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadPostById = createAsyncThunk(
    'postSlice/loadPostById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const post = await postService.getById(+id);
                return thunkAPI.fulfillWithValue(post);
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

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        changeIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(loadPostById.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addCase(loadPostById.rejected, (state, action) => {
                console.log(action.payload);
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPostById
};