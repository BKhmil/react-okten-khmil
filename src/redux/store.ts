import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counter1Slice} from "./slices/slice1";

// configureStore створює глобальний стан
// для того щоб створити цілісний стан з окремих слайсів, треба просто заповнити поле reducer
// об'єктом, який міститиме асоційовані поля зі значеннями для відповідних слайсів
export const store = configureStore({
    reducer: {
        slice1: counter1Slice.reducer
    }
});

// тип для кастомного хука, який типізує useSelector
// це працює наступним чином:
//  - typeof store.getState повертає тип методу getState, який, як я дізнався, є сигнатурою цього методу,
//    з усією його типізацією,
//  - ReturnType це спеціальний тип у тс, який витягує тип повернення функції
//
// таким чином зараз RootState містить всі типи мого store
type RootState = ReturnType<typeof store.getState>;

// кастомний хук який типізує useSelector
export const useAppSelector = useSelector.withTypes<RootState>();

// тип для кастомного хука який типізує вже useDispatch
// тип має тип поля dispatch об'єкту store
type TAppDispatch = typeof store.dispatch;

// ну і сам хук
// до ресі withTypes створює пре-типізовану версію чогось
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();