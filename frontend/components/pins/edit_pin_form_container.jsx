import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinForm from './pin_form';
import { requestSinglePin, updatePin } from '../../actions/pins_actions';


class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        // this.formType = this.props.formType;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }
    componentDidMount() {
        this.props.requestSinglePin(this.props.match.params.pinId);
    }
    // handleSubmit(e) {
    //     e.preventDefault();

    //     // const formData = new FormData();
    //     // formData.append('pin[title]', this.state.title);
    //     // formData.append('pin[description]', this.state.description);
    //     // formData.append('pin[photo]', this.state.photoFile);
    //     this.props.action(formData, this.state.id)
    //         .then(data => {
    //             console.log("props", this.props);
    //             // console.log("history", this.props.history);
    //             const id = this.state.id || data.id;
    //             this.props.history.push(`/pins/${id}`)

    //         }).catch(err => console.log(err));;
    // }

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