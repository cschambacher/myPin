export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_SINGLE_PIN = 'RECEIVE_SINGLE_PIN';
export const CREATE_PIN = 'CREATE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
import * as APIUtil from '../util/pins';

export const requestPins = () => (dispatch) => {
    return APIUtil.getPins()
        .then(pins => { dispatch(receivePins(pins)) });
}

export const requestSinglePin = (id) => (dispatch) => {
    return APIUtil.getSinglePin(id).then(pin => {
        dispatch(receiveSinglePin(pin));
        return pin;
    });
}

export const createPin = pin => dispatch => (
    APIUtil.createPin(pin).then(pin => {
        dispatch(receiveSinglePin(pin));
        return pin;
    }).fail(err => dispatch(receivePinErrors(err.responseJSON)))
);
const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const receiveSinglePin = payload => ({
    type: RECEIVE_SINGLE_PIN,
    payload
});

export const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
});
