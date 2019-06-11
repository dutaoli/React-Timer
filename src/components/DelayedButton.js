import React, { PureComponent } from 'react';

class DelayedButton extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            disable: false
        }
    }

    handleMyClick() {
        this.setState({
            disable: true
        });
        this.timeout = setTimeout(() => {
            this.setState({
                disable: false
            })
        }, 5*1000);
        this.props.handleClick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }



    render() {
        const { disable } = this.state;
        return (
            <button onClick={this.handleMyClick.bind(this)} disabled={disable}>
                {
                    disable
                    ? 'Click me after 5'
                    : 'Click me'
                }
            </button>
        )
    }
}

export default DelayedButton;