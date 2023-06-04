import React from "react";
import Header from "./Header.js";

export default function Register(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(formValue.password, formValue.email);
    }

    return (
        <>
            <Header>
                <button onClick={props.onNavigate} type="button" className="header__button object-hover">Войти</button>
            </Header>
            <div className="login">
                <form onSubmit={handleSubmit} className="login__form" name="form-register">
                    <h2 className="login__title">Регистрация</h2>
                    <div className="login__form-items">
                        <input id="email-input" value={formValue.email || ''} className="login__form-text" onChange={handleChange} type="email" placeholder="Email" name="email" minLength="2" maxLength="40" required />
                        <input id="password-input" value={formValue.password || ''} className="login__form-text" onChange={handleChange} type="password" placeholder="Пароль" name="password" minLength="2" maxLength="40" required />
                    </div>
                    <input className="login__submit-button" value="Зарегистрироваться" type="submit" />
                    <h3 className="login__question">Уже зарегистрированы? <button type="button" onClick={props.onNavigate} className="login__button-entry object-hover">Войти</button></h3>
                </form>
            </div>
        </>
    )
}