const main = document.querySelector('.main');
const app = document.querySelector('.app');

export const errorSearch = (message, error, responseJson, city) => {
    const cardError = document.createElement('div');
    cardError.className = 'card__error';

    const errorMessage = document.createElement('p');
    errorMessage.className = 'card_error--message';
    errorMessage.textContent = message;

    cardError.appendChild(errorMessage);
    main.insertBefore(cardError, app);

    setTimeout(() => {
        main.removeChild(cardError);
    }, 5000);
}