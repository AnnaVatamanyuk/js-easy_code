import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import {login} from './services/auth';
import {validateForm} from "./helpers/validate";
import {showErrorMessage, removeErrorMessage} from './view/errors';


const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const fields = {
    email,
    password,
};

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    onSubmit();
});

function onSubmit() {
    removeErrors();
    const isNotValid = validateForm(email, password);
    if(isNotValid){
        for (let key in isNotValid){
            if (isNotValid[key]){
                showErrorMessage(isNotValid[key], fields[key])
            }
        }
    } else {
        login(email.value, password.value)
    }
}

function removeErrors() {
    for (let key in fields){
        removeErrorMessage(fields[key])
    }
}
