  
import { fetchData } from './components/fetchData.js';
import { nullSearch } from './components/nullSearch.js';
import { cleanAppCards } from './components/cleanAppCards.js';


const input = document.querySelector('input');
const btnSearch = document.querySelector('#btnSearch');
const btnDelete = document.querySelector('#btnDelete');


const validatedForm = e => {
    e.preventDefault();

    if(input.value) {
       fetchData(input.value.toLowerCase());
    } else {
        const message = 'The search cannot be empty';
        nullSearch(message);
    }
}

const cleanApp = e => {
    e.preventDefault();

    cleanAppCards();
}

btnSearch.addEventListener('click', validatedForm);
btnDelete.addEventListener('click', cleanApp);
