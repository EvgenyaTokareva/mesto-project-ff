import { buttonOpenProfil, popapProfil, nameInput, jobInput, profileName, profileJob, buttonOpenCart, popapNewCart, nameCartInput, 
urlCartInput, popupImage, popupElementImage, popupElementName,  cardsList, cardTemplate, formCart, crossButton, popupAll} from './components/constants.js' ;
import './index.css';
import {openPopap, closePopap, overExit} from './components/modal.js';
import {createCard, actionsLike, deleteCard, cardElement} from './components/card.js';
import {initialCards} from './components/cards.js';

displayCards(initialCards);

buttonOpenProfil.addEventListener('click', () => { //слушатель для кнопки отрытия окна редактирования профиля
    nameInput.value = profileName.textContent; //значение со страницы вставляем в поле (имя)
    jobInput.value = profileJob.textContent; //значение со страницы вставляем в поле (занятие)
    openPopap(popapProfil);
});

buttonOpenCart.addEventListener('click', () => { //слушатель для кнопки отрытия окна добавления карты
    formCart.reset()
    openPopap(popapNewCart);
});

crossButton.forEach((item) => { //перебор по всем крестам окон
    item.addEventListener('click', (evt) => {
        const popupAllCross = evt.target.closest('.popup');
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
    const newCard = [{
        name: nameCartInput.value,
        link: urlCartInput.value,
    }];
    displayCards(newCard);
    closePopap(popapNewCart);
});

popupAll.forEach((item) => { //перебор по всем окнам
    item.addEventListener('click', (event) => {
        overExit(event, item);
    })
});

function displayCards(cards) { // Вывести карточки на страницу
    cards.forEach(element => {
        const cards = createCard(element, deleteCard, actionsLike, photoEnlarged);
        cardsList.prepend(cards);
    })
};

function photoEnlarged(photoCardSrc, photoCardAlt) {
    openPopap(popupImage);
    popupElementImage.src = photoCardSrc;
    popupElementImage.alt = photoCardAlt;
    popupElementName.textContent = photoCardAlt;
};

export {popupAll, cardTemplate};