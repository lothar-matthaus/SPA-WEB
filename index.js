import routes from './routes.js';

var stringField = document.getElementById('stringField');
var btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
    if (stringField.value === '')
        alert('A string não deve estar vazia.');
    else
        localStorage.setItem('stringHash', stringField.value);
});

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === '' ? 'home' : hash.replace('#', '');

const renderPage = () => {
    const page = validateHash(window.location.hash);
    container.innerHTML = '';
    container.appendChild(routes[page]);
};

window.addEventListener('load', () => {
    renderPage();
    init();
});
