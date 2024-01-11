// @todo: Темплейт карточки
const cardsList = document.querySelector('.places__list');
// @todo: DOM узлы
const cardTemplate = document.querySelector('#card-template').content;
// @todo: Функция создания карточки
function createCard({name, link}, deleteCard) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    const photoCard = cardElement.querySelector('.card__image');
    photoCard.src = link;
    photoCard.alt = name;
    const basketCart = cardElement.querySelector('.card__delete-button');
    basketCart.addEventListener('click', () => deleteCard(basketCart));
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(basketCart) {
    const listItem = basketCart.closest('.places__item');
    listItem.remove();
}
// @todo: Вывести карточки на страницу
function displayCards(cards) {
    cards.forEach(element => {
        const cards = createCard(element, deleteCard);
        cardsList.append(cards);
    });
}

displayCards(initialCards);
