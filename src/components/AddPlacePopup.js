import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export function AddPlacePopup(props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    React.useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [props.isOpen])

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onAddCard({
            name: nameRef.current.value,
            link: linkRef.current.value,
        })
    }
    return (
        <PopupWithForm
            name='popup-card'
            title='Новое место'
            isOpen={props.isOpen}
            isLoading={props.isLoading}
            onSubmit={handleSubmit}
            buttonText='Создать'
            onClose={props.onClose}>
            <input ref={nameRef} id="name" className="popup__form-text" type="text" placeholder="Название" name="name" minLength="2"
                maxLength="30" required />
            <span className="name-error span-empty"></span>
            <input ref={linkRef} id="link" className="popup__form-text" type="url" placeholder="Ссылка на картинку" name="link" required />
            <span className="link-error span-empty"></span>
        </PopupWithForm>
    )
}