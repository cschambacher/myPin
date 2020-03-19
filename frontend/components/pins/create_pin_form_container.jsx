import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinForm from './pin_form';
import { createPin } from '../../actions/pins_actions';


const mapStateToProps = state => ({
    pin: {
        title: '',
        description: '',
        photoFile: null
    },
    
    formType: 'Create Pin'
});

const mapDispatchToProps = dispatch => ({
    action: pin => dispatch(createPin(pin))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PinForm));