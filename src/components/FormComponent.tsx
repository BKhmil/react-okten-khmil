import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {authService} from "../services/auth.service";

const FormComponent = () => {
    const {handleSubmit, register} = useForm<IAuthDataModel>({
        defaultValues: {username: 'BKhmil1', password: 'P@$$word1'}
    });

    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const authenticate = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    };

    return (
        <div>
            <h3>Login form</h3>
            {isAuthState ? <span>ok</span> : <span>not ok</span>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>submit</button>
            </form>
        </div>
    );
};

export default FormComponent;