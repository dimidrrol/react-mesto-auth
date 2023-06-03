import React from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/Auth.js';
import Header from "./Header.js";
import InfoTooltip from './InfoTooltip.js';

export default function Register(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });
    const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/sign-in', { replace: true });
        props.onClose();
    }

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        register(formValue.password, formValue.email)
        .then((res) => {
            if (res) {
                props.onRegisterClick();
                setIsRegisterSuccess(true);
            } else {
                props.onRegisterClick();
                setIsRegisterSuccess(false);
            }     
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <InfoTooltip isOpen={props.isOpen} isRegister={isRegisterSuccess} onClose={props.onClose} onNavigate={handleNavigate} />
            <Header>
                <button onClick={handleNavigate} type="button" className="header__button object-hover">Войти</button>
            </Header>
            <div className="login">
                <form onSubmit={handleSubmit} className="login__form" name="form-register">
                    <h2 className="login__title">Регистрация</h2>
                    <div className="login__form-items">
                        <input id="email-input" value={formValue.email || ''} className="login__form-text" onChange={handleChange} type="email" placeholder="Email" name="email" minLength="2" maxLength="40" required />
                        <input id="password-input" value={formValue.password || ''} className="login__form-text" onChange={handleChange} type="password" placeholder="Пароль" name="password" minLength="2" maxLength="40" required />
                    </div>
                    <input className="login__submit-button" value="Зарегистрироваться" type="submit" />
                    <h3 className="login__question">Уже зарегистрированы? <button type="button" onClick={handleNavigate} className="login__button-entry object-hover">Войти</button></h3>
                </form>
            </div>
        </>
    )
}