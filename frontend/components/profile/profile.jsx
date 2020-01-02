import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tabs from './tabs';
import PinIndex from '../pins/pin_index_container';
import BoardIndex from '../boards/board_index_container';
import { ProtectedRoute } from '../../util/route_util';
import Greeting from "../greeting/greeting_container";

// const panes = [
//     { title: 'pins', content: <PinIndex /> },
//     { title: 'boards', content: <BoardIndex /> },
// ];

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            panes: [
                { title: 'Pins', content: <PinIndex /> },
                { title: 'Boards', content: <BoardIndex /> },
            ]
        }

    }
    
    componentDidMount() {
        this.props.requestSingleUser(this.props.userId);
    }

    render (){
        const { user, userId } = this.props;
        return (
            <div className="profile">
                <Greeting user={user} userId={userId}/>
                <div className='interactive'>
                    <Tabs panes={this.state.panes} />
                </div>
            </div>
        )
    }
}
