import React from 'react';
import PinIndexItem from './pin_item';

class PinIndex extends React.Component {
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
        return (
            <section className="masonry-pin-index">
                {/* <Route exact path="/" component={PokemonFormContainer} />
                <Route
                    path="/pokemon/:pokemonId"
                    component={PokemonDetailContainer}
                /> */}
                <ul>
                    {pins.map(pin => <PinIndexItem key={pin.id} pin={pin} testUrl={testUrl[Math.floor(Math.random() * testUrl.length)]}/>)}
                </ul>
            </section>
        )
    }
}

export default PinIndex;