import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface IProps {
    text: string;
    id: string;
}

// окрема кнопка з функціоналом навігації
// пропсами приймає текст який на ній буде відображатись та шлях to={}
// ще можна було state додати у пропси для useNavigate
// але я робив саме шляхом виконання нових запитів, а не передачі готового об'єкту
const NavButton: FC<IProps> = ({text, id}) => {
    // працює завдяки цьому
    const navigate = useNavigate();

    return (
        <button onClick={() => {
            navigate(id);
            // ну і прокрутка догори, де з'являтимуться нові елементи
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        >
            {text}
        </button>
    );
};

export default NavButton;