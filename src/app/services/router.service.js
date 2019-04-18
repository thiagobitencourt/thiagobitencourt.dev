const noop = route => console.error(`There is no handler for the route "${route}"`);

export default class RouterService {
    constructor(routes = []) {
        this.routes = routes;
        this.initRouter();
        this.handleRouteChange();
    }
    
    initRouter() {
        window.addEventListener("hashchange", this.handleRouteChange.bind(this), false);
    }

    handleRouteChange() {
        let { hash } = window.location;
        const [a, route, ...params ] = hash.split('/');
        const routePath = `${a}/${route}`;
        (this.routes[routePath] || noop)(routePath, params);
    }

    addRoute(route, handler) {
        this.routes[route] = handler;
    }

    navigate(route, params = []) {
        window.location.hash = [ route, ...params ].join('/');
    }
}
