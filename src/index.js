import RouterService from './app/services/router.service';

import headerComponent from './app/components/header-component/header.component';
import MainComponent from './app/components/main-component/main.component';

const headerContainer = document.getElementById('header-component');
const mainContainer = document.getElementById('main-component');
// const footerContainer = document.getElementById('footer-component');

headerContainer && headerComponent(headerContainer);
// footerContainer && footerComponent(footerContainer);
const mainComponent = new MainComponent(mainContainer);

let routerService = new RouterService({
    '#/': (r, p) => mainComponent.render(r, p),
    '#/articles': () => console.log('rendering articles page'),
    '#/projects': () => console.log('rendering projects page'), 
    '#/aboutme': () => console.log('rendering about me page'),
    '#/login': () => console.log('rendering login page')
});
