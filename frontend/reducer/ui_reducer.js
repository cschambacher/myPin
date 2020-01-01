import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import modalform from './modal_form_reducer';

export default combineReducers({
    // filters,
    modal,
    modalform
});