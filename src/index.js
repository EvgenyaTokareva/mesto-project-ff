import './index.css';
export { popupAll, cardTemplate} 
import {openPopap, closePopap, ClosePopupEsc, OverExit} from './components/modal.js';
import {createCard, actionsLike, deleteCard, cardElement} from './components/card.js';
import {initialCards} from './components/cards.js';
//переменные попапа профиля
const buttonOpenProfil = document.querySelector('.profile__edit-button'); //кнопка открытия окна редактирования профиля
const popapProfil = document.querySelector('.popup_type_edit'); //окно редактирования профиля
const nameInput = document.querySelector('.popup__input_type_name'); // поле формы имя пользователя
const jobInput = document.querySelector('.popup__input_type_description'); // поле формы занятие пользователя
const profileName = document.querySelector('.profile__title'); // имя пользователя выводимое на страницу
const profileJob = document.querySelector('.profile__description'); //занятие пользователя выводимое на страницу
//переменные попапа карточки
const buttonOpenCart = document.querySelector('.profile__add-button'); //кнопка открытия формы добавления карточки
const popapNewCart = document.querySelector('.popup_type_new-card'); //окно добавления карточки
const nameCartInput = popapNewCart.querySelector('.popup__input_type_card-name'); //поле формы название карточки
const urlCartInput = popapNewCart.querySelector('.popup__input_type_url'); //поле формы адрес картинки карточки
const popupImage = document.querySelector('.popup_type_image'); // окно просмотра картинки карточки
const popupElementImage = document.querySelector('.popup__image'); // изображение в окне просмотра
const popupElementName = document.querySelector('.popup__caption'); // название картинки в окне просмотра
const cardsList = document.querySelector('.places__list'); // Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; // DOM узлы
//общие переменные 
const crossButton = document.querySelectorAll('.popup__close'); // кнопка-крест закрытия окон (всех)
const popupAll = document.querySelectorAll('.popup'); //все окна

displayCards(initialCards);

buttonOpenProfil.addEventListener('click', () => { //слушатель для кнопки отрытия окна редактирования профиля
    openPopap(popapProfil);
    nameInput.value = profileName.textContent; //значение со страницы вставляем в поле (имя)
    jobInput.value = profileJob.textContent; //значение со страницы вставляем в поле (занятие)
});

buttonOpenCart.addEventListener('click', () => { //слушатель для кнопки отрытия окна добавления карты
    openPopap(popapNewCart);
    nameCartInput.value = ''; // обнуляем значение из поля
    urlCartInput.value = ''; // обнуляем значение из поля
});

crossButton.forEach((item) => { //перебор по всем крестам окон
    item.addEventListener('click', (evt) => {
        let popupAllCross = evt.target.closest('.popup');
        closePopap(popupAllCross);
    });
});

popapProfil.addEventListener('submit', (evt) => { //кнопка сохранения формы редактирования профиля
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopap(popapProfil);
});

popapNewCart.addEventListener('submit', (evt) => { //кнопка сохранения формы добавления карты
    evt.preventDefault();
    let newCard = [{
        name: nameCartInput.value,
        link: urlCartInput.value,
    }];
    displayCards(newCard);
    closePopap(popapNewCart);
});

 popupAll.forEach((item) => { //перебор по всем окнам
        item.addEventListener('click', (event) => {
        OverExit(event, item);
    })});
		
function displayCards(cards) { // Вывести карточки на страницу
    cards.forEach(element => {
        let cards = createCard(element, deleteCard, actionsLike, photoEnlarged);
        cardsList.prepend(cards);
    })
};

function photoEnlarged(photoCardSrc, photoCardAlt) {
    openPopap(popupImage);
    popupElementImage.src = photoCardSrc;
    popupElementImage.alt = photoCardAlt;
    popupElementName.textContent = photoCardAlt;
}
