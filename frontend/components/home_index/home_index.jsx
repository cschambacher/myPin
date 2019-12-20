import React from 'react';
import HomeIndexItem from './home_index_item';

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPins();
    }

    render() {
        const { pins } = this.props;
        const testUrl = ["https://i.pinimg.com/564x/68/57/b4/6857b465e7015773582fed0e2e5b26cf.jpg",
            "https://i.pinimg.com/236x/03/71/0a/03710a186583632dadfaf084f1c2738d.jpg",
            "https://i.pinimg.com/236x/e9/19/ee/e919ee284e15a1586fdd9c743d5e7cda.jpg",
            "https://i.pinimg.com/236x/a9/93/7d/a9937dce9d5bb5edb54d9f571b53c0f8.jpg",
            "https://i.pinimg.com/236x/e4/97/e1/e497e18991b1898bc14d33add5c29515.jpg",
            "https://i.pinimg.com/236x/68/32/82/683282f76e6875446183fd3f1cc8f55d.jpg",
            "https://i.pinimg.com/236x/cb/d9/32/cbd932939943660838909952b89cbe45.jpg",
            "https://i.pinimg.com/236x/f4/22/cb/f422cb8c2e395c8be37829f60258e349.jpg",
            "https://i.pinimg.com/236x/16/2b/f4/162bf4b9af4ab3915755828a43001020.jpg"
        ]
        console.log("home index");
        return (
            <section className="home-index">
                <ul className="masonry-home-index">
                    {pins.map(pin => <HomeIndexItem key={pin.id} pin={pin} testUrl={testUrl[Math.floor(Math.random() * testUrl.length)]} />)}
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