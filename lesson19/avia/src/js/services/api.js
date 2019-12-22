
import axios from 'axios';

export default class Api {
    constructor() {
        this.url = 'https://aviasales-api.herokuapp.com';
    }
    getCities() {
        return axios.get(this.url + '/cities')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getCountries() {
        return axios.get(this.url + '/countries')
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getPrices(params) {
        return axios.get(this.url + '/prices/cheap', {params})
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getAirlines() {
        return axios.get(this.url + '/airlines')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}