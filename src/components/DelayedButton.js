// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    onClick = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render() {
        // return
        return <button onClick={this.onClick}>Delayed Button</button>
    }
}

export default DelayedButton