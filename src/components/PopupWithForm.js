import React from 'react';

function PopupWithForm(props) {
    return (
        <div onMouseDown={props.onClose} className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={props.name}>
            <div onMouseDown={evt => evt.stopPropagation()} className='popup__container'>
                <button onClick={props.onClose} className='popup__close-button object-hover' type='button'></button>
                <form className='popup__form' onSubmit={props.onSubmit} name={props.name}>
                    <h2 className='popup__form-title'>{props.title}</h2>
                    <div className='popup__form-items'>
                        {props.children}
                        <input className="popup__submit-button" type="submit" value={props.isLoading ? 'Сохранение...' : props.buttonText || 'Сохранить'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;