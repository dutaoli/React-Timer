import React from 'react';

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticks: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        ticks: this.state.ticks + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ticks } = this.state;
    return (
      <div>{ticks} Ticks</div>
    );
  }
}