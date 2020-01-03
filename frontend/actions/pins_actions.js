export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_HOME_PINS = 'RECEIVE_HOME_PINS';
export const RECEIVE_SINGLE_PIN = 'RECEIVE_SINGLE_PIN';
export const CREATE_PIN = 'CREATE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
import * as APIUtil from '../util/pins';

export const requestPins = (userId) => (dispatch) => {
    return APIUtil.getPins(userId)
        .then(pins => { dispatch(receivePins(pins)) });
}

export const requestHomePins = () => (dispatch) => {
    return APIUtil.getHomePins()
        .then(pins => { dispatch(receiveHomePins(pins)) });
}

export const requestSinglePin = (pinId) => (dispatch) => {
    return APIUtil.getSinglePin(pinId).then(pin => {
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

export const updatePin = (pin, pinId) => dispatch => (
    APIUtil.updatePin(pin, pinId)
        .then(pin => dispatch(receiveSinglePin(pin)))
        .fail(err => dispatch(receivePinErrors(err.responseJSON)))
);

export const deletePin = pinId => dispatch => (
    APIUtil.deletePin(pinId)
        .then(() => dispatch(removePin(pinId)))
);
const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});
const receiveHomePins = pins => ({
    type: RECEIVE_HOME_PINS,
    pins
});

const receiveSinglePin = pin => ({
    type: RECEIVE_SINGLE_PIN,
    pin
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

export const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
});
