import DOM from './Dom.js';

class PageCardBalance {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_card_balance');

        DOM.html(
            this.element,
            `
            <h3>Your balance</h3>
            <div class="balance">$24,2568.20</div>
            <button class="page_card_add_button">+</button>
            `
        );
    }

    render() {
        return this.element;
    }
};

const pageCardBalance = new PageCardBalance().render();
export default pageCardBalance;