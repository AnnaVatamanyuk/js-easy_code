import '../css/style.css'; // Тут я добавила подключение css в проект
import './helpers/materialize';
import FormUI from './views/form';
import Locations from './store/locations';
import Tickets from './views/tickets';
import Currency from './views/currency';

const locations = new Locations();
const tickets = new Tickets();
const currency = new Currency();


document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.submit');
    const resetBtn = document.querySelector('.reset');
    const form = new FormUI();

    async function initApp() {
        await locations.init();
        form.setAutocompleteData(locations.citiesForAutocomplete);
    }
    initApp();

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit()
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        form.handleReset();
    });

    function handleSubmit() {
        const arriveCity = locations.getCityCode(form.arriveCity);
        const departureCity = locations.getCityCode(form.departureCity);
        const departureDate = form.departure;
        const returnDate = form.return;

        locations.fetchTickets({
            origin: arriveCity,
            destination: departureCity,
            'depart_date': departureDate,
            'return_date': returnDate,
            currency: currency.getCurrencyValue()
        }).then((data) => {
            tickets.renderTickets(data, currency.getCurrencySymbol())
        })
    }
});