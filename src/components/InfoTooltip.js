import React from "react";
import cross from '../images/cross.svg';
import checkMark from '../images/check-mark.svg';

export default function InfoTooltip(props) {
    return (
        <div onMouseDown={props.isRegister ? props.onNavigate : props.onClose} className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div onMouseDown={evt => evt.stopPropagation()} className="popup__container">
                <button onClick={props.isRegister ? props.onNavigate : props.onClose} className="popup__close-button object-hover" type="button" />
                <img className="popup__image-state" src={props.isRegister ? checkMark : cross} alt="cross" />
                <h2 className="popup__text">{props.isRegister ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
            </div>
        </div>
    )
}