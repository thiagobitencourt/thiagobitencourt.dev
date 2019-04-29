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

    getArticle(id) {
        return ApiService.getSingleArticle(id).then(article => this.article = article);
    }

    render(route, params) {
        const [ id ] = params;
        this.getArticle(id).then(article => (
            this.container.innerHTML = template({
                article,
                markdown: new showdown.Converter(showOptions),
                articleInfoComponent: new ArticleInfo(article).getComponent()
            })
        ))
    }
}