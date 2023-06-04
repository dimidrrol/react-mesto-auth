import React from 'react';
import Card from './Card.js';
import Header from './Header.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <Header>
                <div className='header__info'>
                    <h2 className='header__email'>{props.email}</h2>
                    <button onClick={props.onSignOut} type='button' className='header__button header__button_type_main object-hover'>Выйти</button>                   
                </div>
            </Header>
            <main className="main">
                <section className="profile">
                    <button onClick={props.onEditAvatar} className="profile__change-avatar-button profile__image" type="button"><img className='profile__image' src={currentUser.avatar} alt="Аватар" /></button>
                    <div className="profile__profile-info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} className="profile__edit-button object-hover" type="button"></button>
                        <h2 className="profile__job">{currentUser.about}</h2>
                    </div>
                    <button onClick={props.onAddPlace} className="profile__add-button object-hover" type="button"></button>
                </section>
                <section className="elements">
                    {props.cards.map(card => (
                        <Card card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} key={card._id} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Main;