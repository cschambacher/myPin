import React from 'react';
import HomeIndexItem from './home_index_item';
import { Link } from 'react-router-dom';

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPins();
        this.props.requestUsers();
        this.props.requestBoards(this.props.userId);
    }

    render() {
        const { pins, boards, savePin, users } = this.props;
        debugger;
        return (
            <section className="home-index">
                <div className="users-index">
                    <ul>checkout other users profiles (
                        {users.map(user => <li key={user.id}><Link to={`/users/${user.id}/`}>{user.username}</Link></li>)}
                    )</ul>
                </div>
                <ul className="masonry-home-index">
                    {pins.map(pin => <HomeIndexItem key={pin.id} pin={pin} boards={boards} savePin={savePin} />)}
                </ul>
            </section>
        )
    }
}

export default HomeIndex;


// import React from 'react';

// const HomeIndex = ()=>{
        
//     return (
//         <div className="masonry-home-index">
//             <div className="item"><img src={window.pin1URL} /></div>
//             <div className="item"><img src={window.pin2URL} /></div>
//             <div className="item"><img src={window.pin3URL} /></div>
//             <div className="item"><img src={window.pin4URL} /></div>
//             <div className="item"><img src={window.pin5URL} /></div>
//             <div className="item"><img src={window.pin6URL} /></div>
//             <div className="item"><img src={window.pin9URL} /></div>
//             <div className="item"><img src={window.pin8URL} /></div>
//             <div className="item"><img src={window.pin7URL} /></div>
//             <div className="item"><img src={window.pin10URL} /></div>
//             <div className="item"><img src={window.pin11URL} /></div>
//             <div className="item"><img src={window.pin12URL} /></div>
//             <div className="item"><img src={window.pin13URL} /></div>
//             <div className="item"><img src={window.pin14URL} /></div>
//             <div className="item"><img src={window.pin15URL} /></div>
//             <div className="item"><img src={window.pin16URL} /></div>
//         </div>
//     );
// }



// export default HomeIndex;