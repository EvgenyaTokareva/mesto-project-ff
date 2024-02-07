function openPopap(evt) { //функция открытия всех окон
    evt.classList.add("popup_is-opened"); //добавляем класс открытому окну
    document.addEventListener('keydown', function(event) {
        ClosePopupEsc(event, evt)
    }
	
	);
}

function closePopap(evt) { //функция закрытия всех окон
    evt.classList.remove("popup_is-opened"); //удаляем класс открытому окну
    document.removeEventListener('keydown', function(event) {
        ClosePopupEsc(event, evt);
    })
};

function ClosePopupEsc(event, evt) { //проверка какая кнопка была нажата
    if (event.key === 'Escape') {
        closePopap(evt);
    }
};

function OverExit(evt, item) {
    if (evt.target === evt.currentTarget) {		//проверка где был осуществлен клик на оверлее или нет
				  closePopap(item);
                }
				};	

export {openPopap, closePopap, ClosePopupEsc, OverExit }; 

