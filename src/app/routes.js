import RouterService from './services/router.service';

// Components
import HomeComponent from './components/home-component/home.component';
import ArticlesComponent from './components/articles-component/articles.component';
import ArticleViewerComponent from './components/article-viewer-component/article-viewer.component';
import LoginComponent from './components/login-component/login.component';
import NotFoundComponent from './components/not-found-component/not-found.component';

export default function bootstrap(rootSelector) {
    new RouterService([
        { 
            route: '#/',
            component: HomeComponent
        },
        {
            route: '#/articles',
            component: ArticlesComponent
        },
        {
            route: '#/article',
            component: ArticleViewerComponent
        },
        {
            route: '#/login',
            component: LoginComponent
        }
    ], {
        rootSelector,
        defaultRoute: '#/',
        notFoundComponent: NotFoundComponent
    });
}