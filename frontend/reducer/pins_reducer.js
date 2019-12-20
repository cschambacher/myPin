import { RECEIVE_PINS, RECEIVE_SINGLE_PIN } from '../actions/pins_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);

    let pin;
    switch (action.type) {
        case RECEIVE_PINS:
            return Object.assign({}, state, action.pins);
        case RECEIVE_SINGLE_PIN:
            pin = action.payload.pin
            return Object.assign({}, state, { [pin.id]: pin });
        default:
            return state;
    }
};

export default pinsReducer;