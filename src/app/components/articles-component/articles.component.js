import template from './articles.component.html';
import ApiService from '../../services/api.service';
import './articles.component.scss';

const formattedData = (date) => (
    `${date.getDate()}/${(date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)}/${date.getFullYear()}`
)

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
        this.getArticles().then(articles => 
            this.container.innerHTML = template({ articles, formattedData })
        )
    }
}