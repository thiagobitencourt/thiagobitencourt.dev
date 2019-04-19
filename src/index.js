import RouterService from './app/services/router.service';

import headerComponent from './app/fixed-components/header-component/header.component';
import footerComponent from './app/fixed-components/footer-component/footer.component';

import HomeComponent from './app/components/home-component/home.component';
import ArticlesComponent from './app/components/articles-component/articles.component';
import ArticleViewerComponrnt from './app/components/article-viewer-component/article-viewer.component';
import LoginComponent from './app/components/login-component/login.component';

const element = id => document.getElementById(id)
const mainContainer = element('main-component');

headerComponent(element('header-component'));
footerComponent(element('footer-component'));

const homeComponent = new HomeComponent(mainContainer);
const articlesComponent = new ArticlesComponent(mainContainer);
const articleViewerComponent = new ArticleViewerComponrnt(mainContainer);
const loginComponent = new LoginComponent(mainContainer);

new RouterService({
    '#/': (r, p) => homeComponent.render(r, p),
    '#/articles': (r, p) => articlesComponent.render(r, p),
    '#/article': (r, p) => articleViewerComponent.render(r, p),
    '#/login': () => loginComponent.render()
});

RouterService.navigate('#/');
