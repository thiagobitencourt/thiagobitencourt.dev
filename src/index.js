import headerComponent from './app/components/header-component/header.component';
import mainComponent from './app/components/main-component/main.component';

const headerContainer = document.getElementById('header-component');
const mainContainer = document.getElementById('main-content-component');

headerContainer && headerComponent(headerContainer);
mainContainer && mainComponent(mainContainer);