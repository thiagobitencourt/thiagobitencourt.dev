function createComponentMarkup(data) {
    return `
        <h1>Welcom back ${data.username}!</h1>
    `
}

export default function renderComponent(element, data) {
    element.innerHTML = createComponentMarkup(data);
}