import {validationConfig} from '../index.js';

function enableValidation(validationConfig) {
    const forms = document.querySelectorAll(validationConfig.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, validationConfig);
    });
};

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
};

const showInputError = (formElement, inputElement, errorMessage) => { //показать ошибку
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
};

const hideInputError = (formElement, inputElement) => { //скрыть ошибку
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => { //проверка 
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement, validationConfig) {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
}

function clearValidation(formElement, validationConfig) { //очистка валидации
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputList.forEach((popapInput) => {
        hideInputError(formElement, popapInput);
        popapInput.setCustomValidity("");
    })
    buttonElement.disabled = true;
};

export {clearValidation, enableValidation};