

export default class Tickets {
    constructor() {
        this.container = document.querySelector('.tickets')
    }

    renderTickets(tickets, currency) {
        this.clearScreen();

        if (tickets === {}) {
            this.showErrorMessage();
            return;
        }

        tickets.forEach((ticket) => this.render(ticket, currency))
    }

    clearScreen() {
        this.container.innerHTML = '';
    }

    showErrorMessage() {
        const html = `<div style="color: #ff1506">Билетов нет :( </div>`;
        this.container.insertAdjacentHTML('beforeend', html);
    }

    render(ticket, currency='$') {
        const html = `<div class="col s12 m6">
            <div class="card ticket-card">
                <div class="ticket-airline d-flex align-items-center">
                    <img src="${ticket.airline_logo}" class="ticket-airline-img"/>
                    <span class="ticket-airline-name">${ticket.airline_name}</span>
                </div>
                <div class="ticket-destination d-flex align-items-center">
                    <div class="d-flex align-items-center mr-auto">
                        <span class="ticket-city">${ticket.origin_name}</span>
                        <i class="medium material-icons">flight_takeoff</i>
                    </div>
                    <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                        <span class="ticket-city">${ticket.destination_name}</span>
                    </div>
                </div>
                <div class="ticket-time-price d-flex align-items-center">
                    <span class="ticket-time-departure">${ticket.departure_at}</span>
                    <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
                </div>
                <div class="ticket-additional-info">
                    <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                    <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                </div>
            </div>
    </div>`;
        this.container.insertAdjacentHTML('beforeend', html);
    }
}