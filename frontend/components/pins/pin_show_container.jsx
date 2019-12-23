import { connect } from 'react-redux';
import PinShow from './pin_show';
import { requestSinglePin } from '../../actions/pins_actions';
import { selectPin } from '../../reducer/selectors';

const mapStateToProps = (state, ownProps) => {
    const pinId = parseInt(ownProps.match.params.pinId); 
    const pin = selectPin(state, pinId);
    debugger;
    return {
        pinId,
        pin
    }; 
};

const mapDispatchToProps = dispatch => ({
    requestSinglePin: pinId => dispatch(requestSinglePin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);