import template from './articles.component.html';
import ApiService from '../../services/api.service';
import ArticleInfo from '../../fixed-components/article-info-component/article-info.component';
import './articles.component.scss';

export default class ArticlesComponent {
    constructor(containerElement) {
        this.container = containerElement;
        this.articles = [];
    }

    getArticles() {
        return ApiService.getArticles().then(articles => {
            this.articles = articles;
            return this.articles;
        });
    }

    render() {
        const getArticleInfo = article => new ArticleInfo(article).getComponent();
        this.getArticles().then(articles => 
            this.container.innerHTML = template({ articles, getArticleInfo })
        )
    }
}