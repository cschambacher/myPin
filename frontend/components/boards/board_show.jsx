import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pins/pin_item';

class BoardShow extends React.Component {
   
    componentDidMount() {
        this.props.requestSingleBoard(this.props.boardId);
    }

    render() {
        const { boardId, board } = this.props;
        debugger;
        return (
            <div>
                <h1>{board.title}</h1>
                <p>{board.private}</p>
                <p>{board.pins.map(pin => <PinIndexItem key={pin.id} pin={pin}/>)}</p>
                <Link to="/" />
            </div>
        );
    }
}

export default BoardShow;