import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header.js";


export default function Login(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
      });
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/sign-up', { replace: true });
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
        if (!formValue.email || !formValue.password) {
            return;
        }
        props.onLogin(formValue.password, formValue.email);
    }

    return (
        <>
            <Header>
                <button type="button" onClick={handleNavigate} className="header__button object-hover">Регистрация</button>
            </Header>
            <div className="login">
                <form className="login__form" name="form-login" onSubmit={handleSubmit}>
                    <h2 className="login__title">Вход</h2>
                    <div className="login__form-items">
                        <input id="email-input" value={formValue.email || ''} className="login__form-text" onChange={handleChange} type="email" placeholder="Email" name="email" minLength="2" maxLength="40" required />
                        <input id="password-input" value={formValue.password || ''} className="login__form-text" onChange={handleChange} type="password" placeholder="Пароль" name="password" minLength="2" maxLength="40" required />
                    </div>
                    <input className="login__submit-button" value="Войти" type="submit" />
                </form>
            </div>
        </>
    )
}