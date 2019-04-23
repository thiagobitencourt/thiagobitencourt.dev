import './header.component.scss';
import headerTemplate from './header.component.html';
import RouterService from '../../services/router.service';

function renderComponent(element, data) {
    const { routePath } = RouterService.currentRoute();
    const headerData = {
        ...data,
        blogTitle: 'Thiago Bitencourt',
        menuItems: [
            { label: 'Início', link: '#/', active: routePath == '#/' },
            { label: 'Artigos', link: '#/articles', active: routePath == '#/articles' }
        ]
    }

    element.innerHTML = headerTemplate(headerData);
}

export default function headerComponent(element, data = {}) {
    renderComponent(element, data);
    window.addEventListener("hashchange", renderComponent.bind(null, element, data), false);
}