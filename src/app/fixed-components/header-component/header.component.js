import './header.component.scss';
import headerTemplate from './header.component.html';

export default function headerComponent(element, data = {}) {
    const headerData = {
        ...data,
        blogTitle: 'Thiago Bitencourt',
        menuItems: [
            { label: 'Inicio', link: '#/' },
            { label: 'Artigos', link: '#/articles' },
            // { label: 'Projetos', link: '#/projects' },
            // { label: 'Sobre mim', link: '#/aboutme' },
            { label: 'Login', link: '#/login' }
        ]
    }
    element.innerHTML = headerTemplate(headerData);
}