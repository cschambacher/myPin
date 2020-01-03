import { connect } from 'react-redux';
import PinShow from './pin_show';
import { requestSinglePin, deletePin } from '../../actions/pins_actions';
import { selectPin } from '../../reducer/selectors';

const mapStateToProps = (state, ownProps) => {
    const currUserId = state.session.id;
    const pinId = parseInt(ownProps.match.params.pinId); 
    const pin = selectPin(state, pinId);
    // debugger;
    return {
        currUserId,
        pinId,
        pin
    }; 
};

const mapDispatchToProps = dispatch => ({
    requestSinglePin: (pinId, userId )=> dispatch(requestSinglePin(pinId, userId)),
    deletePin: pinId => dispatch(deletePin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);