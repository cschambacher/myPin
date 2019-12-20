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
        return (
            <section className="pin-index">
                {/* <Route exact path="/" component={PokemonFormContainer} />
                <Route
                    path="/pokemon/:pokemonId"
                    component={PokemonDetailContainer}
                /> */}
                <ul>
                    {pins.map(pin => <PinIndexItem key={pin.id} pin={pin} />)}
                </ul>
            </section>
        )
    }
}

export default PinIndex;