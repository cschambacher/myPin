import React from 'react';
import PinIndex from './pin_index';
import { requestPins, deletePin  } from '../../actions/pins_actions';
import { selectAllPins } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pins: selectAllPins(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestPins: (userId) => dispatch(requestPins(userId)),
    deletePin: pinId => dispatch(deletePin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
