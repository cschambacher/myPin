import React from 'react';
import PinIndexItem from './pin_item';
import CreatePinFormContainer from './create_pin_form_container';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPins();
    }

    render() {
        const { pins, deletePin } = this.props;
        // debugger;
        return (
            <section className="masonry-pin-index">
                <ul>
                    {pins.map(pin => <PinIndexItem key={pin.id} pin={pin} deletePin={deletePin}/>)}
                </ul>
                <CreatePinFormContainer />
            </section>
        )
    }
}

export default PinIndex;