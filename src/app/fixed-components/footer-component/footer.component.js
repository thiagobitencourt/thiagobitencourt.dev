import template from './footer.component.html';
import './footer.component.scss';

export default function footerComponent(element, data = {}) {
    element.innerHTML = template();
}