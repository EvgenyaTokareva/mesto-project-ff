function openPopap(popup) { //функция открытия всех окон
    popup.classList.add("popup_is-opened"); //добавляем класс открытому окну
    document.addEventListener('keydown', closePopupEsc);
};

function closePopap(popup) { //функция закрытия всех окон
    popup.classList.remove("popup_is-opened"); //удаляем класс открытому окну
    document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc() { //проверка какая кнопка была нажата
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopap(openedPopup);
    }
};

function overExit(popup, item) {
    if (popup.target === popup.currentTarget) { //проверка где был осуществлен клик на оверлее или нет
        closePopap(item);
    }
};

export {openPopap, closePopap, overExit }; 

