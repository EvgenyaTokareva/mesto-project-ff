// @todo: Темплейт карточки
const CardsList = document.querySelector('.places__list');
// @todo: DOM узлы
const CardTemplate = document.querySelector('#card-template').content;
// @todo: Функция создания карточки
function CreateCard(name, link, DeleteCard) {
    const CardElement = CardTemplate.cloneNode(true);
    CardElement.querySelector('.card__title').textContent = name;
    CardElement.querySelector('.card__image').src = link;
    CardElement.querySelector('.card__image').alt = name;
    const BasketCart = CardElement.querySelector('.card__delete-button');
    BasketCart.addEventListener('click', () => DeleteCard(BasketCart));
    return CardElement;
}
// @todo: Функция удаления карточки
function DeleteCard(BasketCart) {
    const listItem = BasketCart.closest('.places__item');
    listItem.remove();
}
// @todo: Вывести карточки на страницу
function DisplayCards(cards) {
    cards.forEach(element => {
        const Cards = CreateCard(element.name, element.link, DeleteCard);
        CardsList.append(Cards);
    });
}

DisplayCards(initialCards);
