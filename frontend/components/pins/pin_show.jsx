import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class PinShow extends React.Component {
   
    componentDidMount() {
        debugger;
        this.props.requestSinglePin(this.props.pinId);
    }

    render() {
        const { pinId, pin } = this.props;
        debugger;
        return (
            <div>
                <h1>{pin.title}</h1>
                <img src={pin.photoUrl}/>
                <p>{pin.decription}</p>
            </div>
        );
    }
}

export default PinShow;