import { EventEmitter } from './events';

const showSpinner = () => {
    EventEmitter.dispatch('isLoading', true);
}

const hideSpinner = () => {
    EventEmitter.dispatch('isLoading', false);
}

export {
    showSpinner,
    hideSpinner
};

const Helper = {    
    showSpinner,
    hideSpinner
}

export default Helper;