import {cardTemplate} from '../index.js';
import {deleteCardServer, putCardLike, deleteCardLike} from './api.js';

const cardsList = document.querySelector('.places__list');

function createCard(element, deleteCard, photoEnlarged, userCurrentId) { //Функция создания карточки
    const cardElement = cardTemplate.cloneNode(true);
    const photoCard = cardElement.querySelector('.card__image');
    const cardLike = cardElement.querySelector('.card__like-button');
    const likeSpan = cardElement.querySelector('.element__span');
    const basketCart = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__title').textContent = element.name;
    photoCard.src = element.link;
    photoCard.alt = element.name;
    const likesData = element.likes.length;
    if (likesData === 0) {
        likeSpan.textContent = '0';
    } else {
        likeSpan.textContent = likesData;
    }
    const idCart = element._id;
    const idCartProfil = element.owner._id;
    if (idCartProfil === userCurrentId) {
        basketCart.addEventListener('click', () => deleteCard(basketCart, idCart));
    } else {
        basketCart.remove();
    }
    photoCard.addEventListener('click', () => photoEnlarged(photoCard.src, photoCard.alt));
    Like(element, userCurrentId, cardLike)
    cardLike.addEventListener('click', () => obrabotkaCardLike(cardLike, idCart, likeSpan))
    return cardElement;
};

function Like(element, userCurrentId, cardLike) {
    let massivLikes = [];
    element.likes.forEach((item) => {
        massivLikes.push(item._id)
    })
    for (var i = 0; i < massivLikes.length; i++) {
        if (massivLikes[i] === userCurrentId) {
            cardLike.classList.add("card__like-button_is-active");
        }
    }
}

function obrabotkaCardLike(cardLike, idCart, likeSpan) {
    if (cardLike.classList.contains('card__like-button_is-active')) {
        cardLike.classList.remove("card__like-button_is-active");
        new Promise(function(resolve) {
            const like = deleteCardLike(idCart)
            resolve(like);
        }).then(function(newlike) {
            const Likes = newlike.likes.length;
            likeSpan.textContent = Likes;
        })
    } else {
        cardLike.classList.add("card__like-button_is-active");
        new Promise(function(resolve) {
            const like = putCardLike(idCart)
            resolve(like);
        }).then(function(newlike) {
            const Likes = newlike.likes.length;
            likeSpan.textContent = Likes;
        })
    }
}

function deleteCard(basketCart, idCart) { // Функция удаления карточки
    const listItem = basketCart.closest('.places__item');
    listItem.remove();
    deleteCardServer(idCart);
};


export {createCard, deleteCard};