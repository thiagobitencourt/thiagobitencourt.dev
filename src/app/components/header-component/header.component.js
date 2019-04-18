import headerTemplate from './header.component.html';

export default function headerComponent(element, data = {}) {
    const headerData = {
        ...data,
        blogTitle: 'Thiago Bitencourt',
        menuItems: [
            { label: 'Inicio' },
            { label: 'Artigos' },
            { label: 'Projetos' },
            { label: 'Sobre mim' },
            { label: 'Login' }
        ]
    }
    element.innerHTML = headerTemplate(headerData);
}