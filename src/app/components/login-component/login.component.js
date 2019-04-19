import template from './login.component.html';
import RouterService from '../../services/router.service';

export default class LoginComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    render() {
        this.container.innerHTML = template();
        this.eventBinding(this.container);
    }

    eventBinding(component) {
        let loginButton = component.querySelector('#btn-login');
        loginButton.addEventListener('click', this.loginAction.bind(this));
    }

    loginAction(event) {
        event.preventDefault();
        const form = this.container.querySelector('form');
        const loginObject = {
            username: form.username.value,
            password: form.password.value
        }
        alert(JSON.stringify(loginObject, null, 4));
        RouterService.navigate('#/');
    }
}