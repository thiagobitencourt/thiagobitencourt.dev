import template from './not-found.component.html';

export default class NotFoundComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    render() {
        this.container.innerHTML = template();
    }
}