import template from './article-viewer.component.html';
import ApiService from '../../services/api.service';

export default class ArticleCiewerComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    getArticle(id) {
        return ApiService.getSingleArticle(id).then(article => this.article = article);
    }

    render(route, params) {
        const [ id ] = params;
        this.getArticle(id).then(article => (
            this.container.innerHTML = template({ article, params })
        ))
    }
}