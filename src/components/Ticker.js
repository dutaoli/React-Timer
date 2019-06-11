
import React, { PureComponent } from 'react';

import DelayedButton from './DelayedButton';

class Ticker extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state) => ({
                count: state.count+1
            }))
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleChangeClick() {
        this.setState((state) => ({
            count: 0
        }));
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <div>{count} Picker </div>
                <div><DelayedButton handleClick = {this.handleChangeClick.bind(this)} /></div>
            </div>
            
            )
    }
}

export default Ticker;