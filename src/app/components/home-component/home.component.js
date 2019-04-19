import template from './home.component.html';

export default class HomeComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    render() {
        this.container.innerHTML = template();
    }
}