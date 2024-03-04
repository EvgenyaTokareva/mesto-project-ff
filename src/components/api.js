const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
    headers: {
        authorization: 'c5612652-3dd9-476a-b345-7d3aa3d04919',
        'Content-Type': 'application/json'
    }
}

const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
            headers: config.headers
        })
        .then(response => checkResponse(response))
}

const getInitialUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
             headers: config.headers
        })
        .then(response => checkResponse(response))
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

function addNewCard(nameCart, linkCart) {
    return fetch(`${config.baseUrl}/cards`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: nameCart,
                link: linkCart,
            }),
        })
        .then(response => checkResponse(response))
};

function setUserInfo(profil) {
    return fetch(`${config.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: profil.name,
                about: profil.about,
            }),
        })
        .then(response => checkResponse(response))
}

function setUserAvatar(avatarka) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
             headers: config.headers,
            body: JSON.stringify({
                avatar: avatarka,
            }),
        })
        .then(response => checkResponse(response))
};

function deleteCardServer(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: config.headers
        })
        .then(response => checkResponse(response))

}

function putCardLike(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: config.headers
        })
        .then(response => checkResponse(response))
}

function deleteCardLike(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: config.headers
        })
        .then(response => checkResponse(response))
}

export {getInitialCards, getInitialUser,  addNewCard, setUserInfo, setUserAvatar, deleteCardServer, putCardLike, deleteCardLike}