import React from 'react';
import HomeIndex from './home_index';
import { requestHomePins } from '../../actions/pins_actions';
import { requestBoards, savePin } from '../../actions/boards_actions';
import { selectAllPins, selectAllBoards } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    userId: state.session.id,
    pins: selectAllPins(state),
    boards: selectAllBoards(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestPins: () => dispatch(requestHomePins()),
    requestBoards: (userId) => dispatch(requestBoards(userId)),
    savePin: (board, userId) => dispatch(savePin(board, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
