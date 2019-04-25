import template from './article-info.component.html';
import { formattedDate } from '../../services/utils.service';
import './article-info.component.scss';

export default class ArticleInfo {
    constructor({ author, publicationDate }) {
        this.author = author;
        this.publicationDate = publicationDate;
        this.formattedDate = formattedDate;
    }

    getComponent() {
        return template(this);
    }
}