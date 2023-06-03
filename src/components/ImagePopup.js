import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_image">
                <button onClick={props.onClose} className="popup__close-button popup__close-button_type_image object-hover" type="button"></button>
                <img src={props.card.card.link} className="popup__image" alt={props.card.card.name} />
                <h2 className="popup__description">{props.card.card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;