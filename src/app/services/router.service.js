const noop = route => console.error(`There is no handler for the route "${route}"`);

export default class RouterService {
    constructor(routes = [], routesConfig = {}) {
        this.routes = routes;
        this.notFound = routesConfig.notFoundComponent;
        this.defaultRoute = routesConfig.defaultRoute;
        this.rootElement = document.querySelector(routesConfig.rootSelector || '#root');

        this.initRouter();
        this.handleRouteChange();
    }
    
    initRouter() {
        window.addEventListener("hashchange", this.handleRouteChange.bind(this), false);
    }

    handleRouteChange() {
        let { hash } = window.location;
        const [a, route, ...params ] = hash.split('/');
        if(route == undefined) {
            return RouterService.navigate(this.defaultRoute);
        }

        const routePath = `${a}/${route}`;
        const Component = this.getRouteComponent(routePath) || this.notFound;
        new Component(this.rootElement).render(routePath, params);
    }

    getRouteComponent(route) {
        let routeComponent;
        this.routes.some(r => {
            if(r.route == route) {
                routeComponent = r.component;
                return true;
            }
        });
        return routeComponent;
    }

    static navigate(route, params = []) {
        window.location.hash = [ route, ...params ].join('/');
    }

    static addRoute(route, handler) {
        this.routes[route] = handler;
    }
}
