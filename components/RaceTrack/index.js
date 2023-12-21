import React, { Component } from 'react';

class RaceTrack extends Component {
  constructor(props) {
    super(props);

    // Initialize state with default values
    this.state = {
      participants: this.props.participants,
      elapsedTime: 0,
    };

    // Set up a timer to update elapsed time every second
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer interval when the component is unmounted
    clearInterval(this.timerInterval);
  }

  render() {
    const { participants, elapsedTime } = this.state;

    return (
      <div>
        <h1>Race Track</h1>
        <div>
          <h2>Elapsed Time: {elapsedTime} seconds</h2>
        </div>
        <div>
          {participants.map((participant, index) => (
            <div key={index}>
              <h3>{participant.name}</h3>
              <div
                style={{
                  width: `${participant.speed * elapsedTime}px`, // Adjust the style based on speed and time
                  height: '20px',
                  backgroundColor: 'blue',
                  margin: '5px 0',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RaceTrack;
