import DOM from './Dom.js';
import pageCardFormTransaction from './PageCardFormTransaction.js';

class PageCardBalance {
    constructor() {
        this.balance = 0;

        this.getBalance();

        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_card_balance');

        DOM.html(
            this.element,
            `
            <h3>Your balance</h3>
            <div class="balance">$${this.balance}</div>

            <a class="to_transactions" href="#transactions">All transactions</a>
            `
        );

        const btnAddTransaction = DOM.create('button');
        DOM.addClass(btnAddTransaction, 'page_card_add_button');
        DOM.html(btnAddTransaction, '+');

        DOM.append(this.element, btnAddTransaction);

        DOM.on(btnAddTransaction, 'click', this.addTransaction);
    }

    getBalance() {
        let cardTransaction = localStorage.getItem('cardTransaction') || [];
        if (cardTransaction.length > 0) cardTransaction = JSON.parse(cardTransaction);

        let amount = 0;

        cardTransaction.forEach(function(transaction) {
            amount += +transaction.amount;
        });

        if (!isNaN(amount)) this.balance = amount;
    }

    addTransaction() {
        DOM.append(DOM.search('.page_card_balance'), pageCardFormTransaction, DOM.search('.to_transactions'));
    }

    render() {
        return this.element;
    }
};

const pageCardBalance = new PageCardBalance().render();
export default pageCardBalance;
