import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    React.useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='popup-avatar'
            title='Обновить аватар'
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            isOpen={props.isOpen}
            buttonText='Сохранить'
            onClose={props.onClose}>
            <input ref={avatarRef} id="avatar" className="popup__form-text" type="url" placeholder="Ссылка на новый аватар" name="avatar" required />
            <span className="avatar-error span-empty"></span>
        </PopupWithForm>
    )
}