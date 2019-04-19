import template from './footer.component.html';

export default function footerComponent(element, data = {}) {
    element.innerHTML = template();
}