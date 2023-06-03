import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`);

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <article className="element" key={props.card._id}>
            { isOwn && <button onClick={handleDeleteClick} className="element__delete object-hover" type="button" />}
            <img onClick={handleClick} src={props.card.link} className="element__image" alt={props.card.name} />
            <div className="element__description">
                <h3 className="element__title">{props.card.name}</h3>
                <div className="element__like-box">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;