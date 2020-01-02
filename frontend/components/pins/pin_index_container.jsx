import React from 'react';
import PinIndex from './pin_index';
import { requestPins, deletePin  } from '../../actions/pins_actions';
import { requestBoards, savePin  } from '../../actions/boards_actions';
import { selectAllPins, selectAllBoards } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pins: selectAllPins(state),
    boards: selectAllBoards(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestPins: (userId) => dispatch(requestPins(userId)),
    requestBoards: (userId) => dispatch(requestBoards(userId)),
    savePin: (board, userId) => dispatch(savePin(board, userId)),
    deletePin: pinId => dispatch(deletePin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
