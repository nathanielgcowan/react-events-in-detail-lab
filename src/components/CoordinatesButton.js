// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    onClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        // return
        return <button onClick={this.onClick}>Button</button>
    }
}

export default CoordinatesButton;
