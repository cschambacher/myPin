import React from 'react';
import HomeIndex from './home_index';
import { requestHomePins } from '../../actions/pins_actions';
import { selectAllPins } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pins: selectAllPins(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestPins: () => dispatch(requestHomePins())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
