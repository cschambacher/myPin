import React from 'react';
import PinIndexItem from './pin_item';
import CreatePinFormContainer from './create_pin_form_container';
import BoardIndex from '../boards/board_index_container';
import {Link,withRouter} from 'react-router-dom';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.requestPins(this.props.match.params.userId);
        this.props.requestBoards(this.props.match.params.userId);
    }

    render() {
        const { pins, boards, deletePin, savePin } = this.props;
        // debugger;
        return (
            <section className="masonry-pin-index">
                <ul>
                    <li className="item-pin-index">
                        <Link to={`/pins/new`}>
                            <div className="create-pin-item"> 
                                <div className="icon-plus-red"><i className="fas fa-plus fa-1x"></i></div> 
                            </div>
                            <div className="pin-footer">Create Pin</div> 
                            
                        </Link>
                    </li>
                    {pins.map(pin => <PinIndexItem key={pin.id} pin={pin} boards={boards} savePin={savePin} deletePin={deletePin}/>)}
                </ul>
                {/* <CreatePinFormContainer /> */}
                {/* <BoardIndex/> */}
            </section>
        )
    }
}

export default withRouter(PinIndex);