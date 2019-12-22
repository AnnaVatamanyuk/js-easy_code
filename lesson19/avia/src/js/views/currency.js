
export default class CurrencyUI {
    constructor() {
        this.elem = document.getElementById('currency');
        this.list = {
            USD: '$',
            EUR: '€',
        }
    }

    getCurrencyValue() {
        return this.elem.value;
    }

    getCurrencySymbol() {
        return this.list[this.elem.value]
    }
}
