import template from './article-viewer.component.html';

export default class ArticleCiewerComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    render(route, params) {
        let article = { 
            title: 'Olá mundo!',
            author: 'Fulano Sobrenome',
            tags: [ 'first' ],
            publicationDate: new Date(),
            body: `
                Primeiro artigo publicado no blog que é muito maneiro!
            `
        }

        this.container.innerHTML = template({ article, params });
    }
}