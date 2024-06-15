import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/postSlice";

// створення та конфігурація стору
export const store = configureStore({
    // в редюсери передаю редюсери з userSlice i postSlice
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

// кастомний хук для можливості використання протипізованого useSelector'у
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

// ну а це кастомний хук для можливості використання протипізованого useDispatch'у
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();