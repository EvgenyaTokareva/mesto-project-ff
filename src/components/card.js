function createCard({name,link}, deleteCard, actionsLike, photoEnlarged) { //Функция создания карточки
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    const photoCard = cardElement.querySelector('.card__image');
    photoCard.src = link;
    photoCard.alt = name;
    const basketCart = cardElement.querySelector('.card__delete-button');
    basketCart.addEventListener('click', () => deleteCard(basketCart));
    photoCard.addEventListener('click', () => photoEnlarged(photoCard.src, photoCard.alt));
    const cardLike = cardElement.querySelector('.card__like-button');
    cardLike.addEventListener('click', () => actionsLike(cardLike));
    return cardElement;
}

function actionsLike(cardLike) {
    if (cardLike.classList.contains('card__like-button_is-active')) {
        cardLike.classList.remove("card__like-button_is-active");
    } else cardLike.classList.add("card__like-button_is-active");
}

function deleteCard(basketCart) { // Функция удаления карточки
    const listItem = basketCart.closest('.places__item');
    listItem.remove();
}

export { createCard, actionsLike, deleteCard};
import {cardTemplate} from '../index.js';
