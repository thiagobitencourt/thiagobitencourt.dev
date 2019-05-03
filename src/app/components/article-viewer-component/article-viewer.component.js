import template from './article-viewer.component.html';
import showdown from 'showdown';
import ApiService from '../../services/api.service';
import ArticleInfo from '../../fixed-components/article-info-component/article-info.component';
import './article-viewer.component.scss';

const showOptions = {
    simpleLineBreaks: true,
    smartIndentationFix: true,
    openLinksInNewWindow: true
}

export default class ArticleViewerComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    getArticle(key) {
        return ApiService.getSingleArticle(key).then(article => this.article = article);
    }

    render(_, params) {
        const [ key ] = params;
        this.getArticle(key).then(article => (
            this.container.innerHTML = template({
                article,
                markdown: new showdown.Converter(showOptions),
                articleInfoComponent: new ArticleInfo(article).getComponent()
            })
        ))
    }
}