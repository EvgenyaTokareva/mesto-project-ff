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
const formCart = document.forms.newplace; // форма добавления новой карточки
const formProfil = document.forms.editprofile;
//общие переменные 
const crossButton = document.querySelectorAll('.popup__close'); // кнопка-крест закрытия окон (всех)
const popupAll = document.querySelectorAll('.popup'); //все окна

const photoProfil = document.querySelector('.profile__image');
const popapAvatar = document.querySelector('.popup_type_avatar'); 
const profileImage = document.querySelector('.profile__image');
const avatarInput = document.querySelector('.popup__input_type_avatar');
const avatarForm = document.querySelector('.popup__form_type_avatar');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export { buttonOpenProfil, popapProfil, nameInput, jobInput, profileName, profileJob, buttonOpenCart, popapNewCart, nameCartInput, 
urlCartInput, popupImage, popupElementImage, popupElementName,  cardsList, cardTemplate, formCart, crossButton, popupAll, formProfil, validationConfig, photoProfil,
popapAvatar, profileImage, avatarInput, avatarForm};