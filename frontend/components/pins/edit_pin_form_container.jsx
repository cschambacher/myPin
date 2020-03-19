import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinForm from './pin_form';
import { requestSinglePin, updatePin } from '../../actions/pins_actions';


class EditPinForm extends React.Component {
    componentDidMount() {
        this.props.requestSinglePin(this.props.match.params.pinId);
    }

    render() {
        const { action, formType, pin } = this.props;

        if (!pin) return null;
        return (
            <PinForm
                action={action}
                formType={formType}
                pin={pin} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    formType: 'Edit Pin'
});

const mapDispatchToProps = dispatch => ({
    requestSinglePin: pinId => dispatch(requestSinglePin(pinId)),
    action: (pin, pinId) => dispatch(updatePin(pin, pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditPinForm));