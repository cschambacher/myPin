import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tabs from './tabs';
import PinIndex from '../pins/pin_index_container';
import BoardIndex from '../boards/board_index_container';

// const panes = [
//     { title: 'pins', content: <PinIndex /> },
//     { title: 'boards', content: <BoardIndex /> },
// ];

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            panes: [
                { title: 'pins', content: <PinIndex /> },
                { title: 'boards', content: <BoardIndex /> },
            ]
        }

    }
    
    componentDidMount() {
        this.props.requestSingleUser(this.props.userId);
    }

    render (){
        return (
            <div>
                <div className='interactive'>
                    <Tabs panes={this.state.panes} />
                </div>
            </div>
        )
    }
}
