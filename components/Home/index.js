import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ParticipantsList from '../ParticipantsList'
import RaceTrack from '../RaceTrack'

import './index.css'



class Home extends Component {
  state = {
    participants: [],
    nameInput: '',
    speedInput: '',
    startTime: "--",
    endTime: "--"
  }

  onChangeNameInput = (event) => {
    this.setState({ nameInput: event.target.value })

  }
  onChangeSpeedInput = (event) => {
    this.setState({ speedInput: event.target.value })

  }

  submitForm = (event) => {
    const { nameInput, speedInput, participants } = this.state

    event.preventDefault()

    // const newParticipant = [ nameInput, speedInput ];
    // console.log(newParticipant)
    // this.setState({
    //   participants:[newParticipant],

    //   nameInput: '',
    //   speedInput: '',
    // });
    const newItem = {
      id: uuidv4(), // Generate a unique key using uuid
      text1: nameInput,
      text2: speedInput
    };

    this.setState({
      participants: [...participants, newItem],
      nameInput: '',
      speedInput: ''
    });

  }

  startTheRace = () => (
    <div>
      <p>hoo</p>
    </div>
    
  )



  render() {
    const { participants, nameInput, speedInput, startTime, endTime } = this.state
    // console.log(participants)
    return (
      <div className='main-container'>
        <div className='runner-details-container'>
          <form className='form-controls' onSubmit={this.submitForm}>
            <h1>RUNNER DETAILS</h1>
            <p>"You can add max 10 participants</p>
            <div className='input-container'>
              <label htmlFor='nameInput'>Name</label>
              <input type="text" id="nameInput" value={nameInput} onChange={this.onChangeNameInput} />
            </div>
            <div className='input-container'>
              <label htmlFor='speedInput'>Speed</label>
              <input type="text" id="speedInput" value={speedInput} onChange={this.onChangeSpeedInput} />
            </div>
            <div className='input-container'>
              <label htmlFor='timeInput'>Start Time</label>
              <input type="text" id="timeInput" />
            </div>
            <button type="submit">+ ADD RUNNER</button>
          </form>

        </div>
        <div className='list-of-participants-container'>
          <h1>LIST OF PARTICIPANTS</h1>
          <ul className='list-container1'>
            <li>Name</li>
            <li>Speed</li>
            <li>Start Time</li>
            <li>End Time</li>
          </ul>

          <div>
            {/* {participants.map(each => ( */}
            {/* // <ul className='list-container'>
              //   <li>{each.nameInput}</li>
              //   <li>{speedInput}</li>
              //   <li>{startTime}</li>
              //   <li>{endTime}</li>
              // </ul> */}


            {participants.map((each) => (
              // <ul className='list-container'>
              <ParticipantsList eachItem={each} key={each.id} />
              // </ul>
            ))}
          </div>
          <hr />
          <div className='btn-container'>
            <button type="button" className="race-start-btn" onClick={this.startTheRace}>Race Start</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home