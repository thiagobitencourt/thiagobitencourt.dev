function createComponentMarkup(data) {
    return `
        <section class="">Thiago Bitencourt</section>
        <nav class="navigation">
            <ul>
                <li>Início</li>
                <li>Projetos</li>
                <li>Artigos</li>
                <li>Sobre mim</li>
                <li>Login</li>
            </ul>
        </nav>
    `
}

export default function headerComponent(element, data) {
    element.innerHTML = createComponentMarkup(data);
}