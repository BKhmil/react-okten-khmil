import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {authService} from "../services/auth.service";

// компонент форми
const FormComponent = () => {
    // використання useForm, деструктурую звідси handleSubmit та register
    // типізую поля форми під IAuthDataModel
    // та ставлю дефолтні значення в інпути
    const {handleSubmit, register} = useForm<IAuthDataModel>({
        defaultValues: {username: 'BKhmil1', password: 'P@$$word1'}
    });

    // оскільки у нас тут логінація проста, без редіректу, то ось такий стейт впроваджено
    // по суті він тільки для відображення результату логінації
    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    // функція яка буде спрацьовувати на onSubmit
    // приймає в себе об'єкт з полями форми
    const authenticate = async (formData: IAuthDataModel) => {
        // із authService викликаю метод authentication в який передаю formData(поля форми)
        // ну і повертається результат логінації
        const isAuth = await authService.authentication(formData);

        // і на основі цього йде оновлення стейту
        setIsAuthState(isAuth);
    };

    return (
        <div>
            <h3>Login form</h3>
            {/*  ну і ось ця частина коду, яка відображає результат логінації   */}
            {isAuthState ? <span>ok</span> : <span>not ok</span>}

            {/*  дефолтна робота з формою через useForm   */}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>submit</button>
            </form>
        </div>
    );
};

export default FormComponent;