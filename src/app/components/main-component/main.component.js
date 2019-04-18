import mainTemplate from './main.component.html';

export default function renderComponent(element, data = {}) {
    const mainData = {
        ...data,
        username: 'Main user'
    }
    element.innerHTML = mainTemplate(mainData);
}