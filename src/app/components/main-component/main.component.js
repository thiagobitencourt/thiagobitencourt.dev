import mainTemplate from './main.component.html';

export default class MainComponent {
    constructor(containerElement, routerService) {
        this.container = containerElement;
        this.routerService = routerService;

        // this.routerService.addRoute('#/', this.render.bind(this));
    }

    render(route, params) {
        this.container.innerHTML = mainTemplate({
            username: params[0] || 'Main user'
        });
    }
}