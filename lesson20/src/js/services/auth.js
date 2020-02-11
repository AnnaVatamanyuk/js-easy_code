import axios from 'axios';

const URL = 'https://mlp-demo.herokuapp.com/api/public';

export function login(email, password) {
    axios.post(`${URL}/auth/login`,
        JSON.stringify({email, password}),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log('okay', response);
            M.toast({html: 'Login success', classes: 'rounded'});
        })
        .catch((error) => {
            console.log('catch', error.response);
            M.toast({html: error.response.data.message, classes: 'error-toast'})
        })
}