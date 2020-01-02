import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class PinShow extends React.Component {
   
    componentDidMount() {
        debugger;
        this.props.requestSinglePin(this.props.pinId);
    }

    render() {
        const { pinId, pin, deletePin } = this.props;
        debugger;
        return (
            <div className="pin-show">
                <div className="pin-show-box">
                <img src={pin.photoUrl}/>
                <div className="pin-show-detail">
                    <div className="pin-show-header">
                        <ul className="pin-show-list">
                            <li className="icon-edit-pin"><Link to={`/pins/${pin.id}/edit`}>
                                <i className="fas fa-pen fa-1x"></i></Link>
                            </li>
                            <li><button className="pin-list-btn-pin" onClick={() => deletePin(pin.id)}>Remove</button></li>
                            <li className="pin-list-submit-pin">Save</li>  
                                {/* <div className="pin-list-submit-dropdown">
                                    {boards.map(board => <div key={board.id} onClick={() => savePin(board, pin.id)}>{board.title}</div>)}
                                </div> */}
                        </ul>
                    </div>
                    <div className="pin-show-body">

                        <h2>{pin.title}</h2>
                        <p>{pin.description}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default PinShow;