import template from './articles.component.html';

export default class ArticlesComponent {
    constructor(containerElement) {
        this.container = containerElement;
    }

    render() {
        let articles = [
            { 
                title: 'Olá mundo!',
                author: 'Fulano Sobrenome',
                tags: [ 'first' ],
                publicationDate: new Date()
            }
        ];

        this.container.innerHTML = template({ articles });
    }
}