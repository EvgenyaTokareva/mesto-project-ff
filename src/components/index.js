import { buttonOpenProfil, popapProfil, nameInput, jobInput, profileName, profileJob, buttonOpenCart, popapNewCart,
nameCartInput, urlCartInput, popupImage, popupElementImage, popupElementName, cardsList, cardTemplate, formCart, crossButton, 
popupAll, formProfil, validationConfig} from './constants.js';
import '../index.css';
import {openPopap, closePopap, overExit} from './modal.js';
import { createCard, deleteCard,} from './card.js';
import {clearValidation, enableValidation} from './validation.js';
import {getInitialCards, getInitialUser, addNewCard, setUserInfo, setUserAvatar} from './api.js';

let userCurrentId;
let cardLike;
let profil;
let avatarka;
const photoProfil = document.querySelector('.profile__image');
const popapAvatar = document.querySelector('.popup_type_avatar'); 
const profileImage = document.querySelector('.profile__image');
const avatarInput = document.querySelector('.popup__input_type_avatar');
const avatarForm = document.querySelector('.popup__form_type_avatar');

Promise.all([getInitialUser(), getInitialCards()])
    .then(([profile, cards]) => {
        userCurrentId = profile._id;
        setProfileData(profile); //выводим данные пользователя
        displayCards(cards, userCurrentId) //выводим карты
    })
    .catch(error => {
        console.error(error);
    });

function setProfileData(profile) { //выводим данные пользователя в блок
    profileName.textContent = profile.name;
    profileJob.textContent = profile.about;
    photoProfil.src = profile.avatar;
};

function displayCards(cards, userCurrentId) { // Вывести карточки на страницу
    cards.forEach(element => {
        const cards = createCard(element, deleteCard, photoEnlarged, userCurrentId);
        cardsList.prepend(cards);
    })
};

enableValidation(validationConfig); // включение валидации

crossButton.forEach((item) => { //перебор по всем крестам окон
    item.addEventListener('click', (evt) => {
        const popupAllCross = evt.target.closest('.popup');
        closePopap(popupAllCross);
    });
});

popupAll.forEach((item) => { //перебор по всем окнам
    item.addEventListener('click', (event) => {
        overExit(event, item);
    })
});

buttonOpenCart.addEventListener('click', () => { //слушатель для кнопки отрытия окна добавления карты
    formCart.reset()
    clearValidation(formCart, validationConfig);
    openPopap(popapNewCart);
});

photoProfil.addEventListener('click', () => { //слушатель для кнопки отрытия окна редактирования профиля
    avatarForm.reset()
    clearValidation(avatarForm, validationConfig);
    openPopap(popapAvatar);
});

buttonOpenProfil.addEventListener('click', () => { //слушатель для кнопки отрытия окна редактирования профиля
    nameInput.value = profileName.textContent; //значение со страницы вставляем в поле (имя)
    jobInput.value = profileJob.textContent; //значение со страницы вставляем в поле (занятие)
    clearValidation(formProfil, validationConfig);
    openPopap(popapProfil);
});

function photoEnlarged(photoCardSrc, photoCardAlt) { //приближение фото
    openPopap(popupImage);
    popupElementImage.src = photoCardSrc;
    popupElementImage.alt = photoCardAlt;
    popupElementName.textContent = photoCardAlt;
};

function loadingText(loading, buttonLoading) { //изменение кнопки сохранения
    if (loading) {
        buttonLoading.textContent = 'Сохранение...';
    } else {
        buttonLoading.textContent = 'Сохранение';
    }
};

popapAvatar.addEventListener('submit', (evt) => { //кнопка сохранить у аватарки
evt.preventDefault();
const buttonLoading = popapAvatar.querySelector('.popup__button');	
const avatarka = avatarInput.value;
setUserAvatar(avatarka)
.then(function() {
loadingText(true, buttonLoading)
profileImage.src = avatarka;
 closePopap(popapAvatar);
        }).catch((err) => {
            console.log(`Ошибка: ${err.message}`)
        })
        .finally(function() {
            loadingText(false, buttonLoading)
        })
});

popapProfil.addEventListener('submit', (evt) => { //кнопка сохранения формы редактирования профиля
evt.preventDefault();
    const profil = {
        name: nameInput.value,
        about: jobInput.value
    }
const buttonLoading = popapProfil.querySelector('.popup__button');	
setUserInfo(profil)	
.then(function() {
profileName.textContent = profil.name;
profileJob.textContent = profil.about;
loadingText(true, buttonLoading)
closePopap(popapProfil);
        }).catch((err) => {
            console.log(`Ошибка: ${err.message}`)
        })
        .finally(function() {
            loadingText(false, buttonLoading)        
        })
});

popapNewCart.addEventListener('submit', (evt) => { //кнопка сохранения формы добавления карты
evt.preventDefault();
    const name = nameCartInput.value;
    const link = urlCartInput.value;
    const buttonLoading = popapNewCart.querySelector('.popup__button');
addNewCard(name, link)	
.then(function(newCard) {
        loadingText(true, buttonLoading)
        const userCurrentId = newCard.owner._id;
        const cards = createCard(newCard, deleteCard, photoEnlarged, userCurrentId);
        cardsList.prepend(cards);
		closePopap(popapNewCart);
    }).catch((err) => {
        console.log(`Ошибка: ${err.message}`)
    }).finally(function() {
        loadingText(false, buttonLoading)
        
    });
});

export { popupAll, cardTemplate, validationConfig, profil, avatarka};