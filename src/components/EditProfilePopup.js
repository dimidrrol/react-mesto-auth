import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='popup-profile'
            title='Редактировать профиль'
            isOpen={props.isOpen}
            isLoading={props.isLoading}
            onSubmit={handleSubmit}
            buttonText='Сохранить'
            onClose={props.onClose}>
            <input id="name-input" value={name || ''} onChange={handleNameChange} className="popup__form-text" type="text" placeholder="Имя" name="name" minLength="2"
                maxLength="40" required />
            <span className="name-input-error span-empty"></span>
            <input id="job-input" value={description || ''} onChange={handleDescriptionChange} className="popup__form-text" type="text" placeholder="О себе" name="about" minLength="2"
                maxLength="200" required />
            <span className="job-input-error span-empty"></span>
        </PopupWithForm>
    )
}