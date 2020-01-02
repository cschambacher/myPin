import { RECEIVE_PINS, RECEIVE_HOME_PINS, RECEIVE_SINGLE_PIN, REMOVE_PIN } from '../actions/pins_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);

    let pin;
    switch (action.type) {
        case RECEIVE_PINS:
        case RECEIVE_HOME_PINS:
            return Object.assign({}, action.pins);
        case RECEIVE_SINGLE_PIN:
            pin = action.pin
            return Object.assign({}, state, { [pin.id]: pin });
        case REMOVE_PIN:
            let nextState = Object.assign({}, state);
            delete nextState[action.pinId]
            return nextState;
        default:
            return state;
    }
};

export default pinsReducer;