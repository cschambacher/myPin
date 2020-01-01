import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardForm from './board_form';
import { createBoard } from '../../actions/boards_actions';
import { openModalForm, closeModalForm } from '../../actions/modal_form_actions';

const mapStateToProps = state => ({
    board: {
        title: '',
        private: false,
        pins: []
    },
    
    formType: 'Create Board'
});

const mapDispatchToProps = dispatch => ({
    action: board => dispatch(createBoard(board)),
    closeModalForm: () => dispatch(closeModalForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);