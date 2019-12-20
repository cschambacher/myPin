import React from 'react';
import PinIndex from './pin_index';
import { requestPins } from '../../actions/pins_actions';
import { selectAllPins } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pins: selectAllPins(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestPins: () => dispatch(requestPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
