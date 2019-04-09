import * as MainComponent from './app/components/main-component/main.component';
import './main.scss';

function getElement(idSelector) {
    return document.getElementById(idSelector);
}

MainComponent.renderComponent(getElement('main-content-component'), { username: 'Fulano' });