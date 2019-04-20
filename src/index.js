import bootstrap from './app/routes';
// Fixed components
import headerComponent from './app/fixed-components/header-component/header.component';
import footerComponent from './app/fixed-components/footer-component/footer.component';

headerComponent(document.getElementById('header-component'));
footerComponent(document.getElementById('footer-component'));

bootstrap('#main-component');
