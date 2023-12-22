import Popup from 'reactjs-popup'
import './index.css'

const ReactPopUp = (props) => {
    const { eachItem, onRestart } = props
    // const {id,nameInput, speedInput, startTime, endTime}  = eachItem
    // console.log(id)
    console.log(eachItem)



    return (
        <div className="popup-container">
            <Popup
                modal
                trigger={
                    <button type="button" className="trigger-button">
                        Show Results
                    </button>
                }
            >
                {close => (
                    <>
                        <div className='popub-container'>
                            <h1>SCORE BOARD</h1>
                            <ul className='list-container1'>
                                <li>Name</li>
                                <li>Speed</li>
                                <li>Start Time</li>
                                <li>End Time</li>
                            </ul>
                            <ul className='list-container1'>
                                <li>sukanya</li>
                                <li>40</li>
                                <li>10:00</li>
                                <li>--</li>
                            </ul>
                            <ul className='list-container1'>
                                <li>ashok</li>
                                <li>45KM/H</li>
                                <li>10:40</li>
                                <li>--</li>
                            </ul>
                            <hr/>
                            <div className='restart-container'>
                            <button
                                type="button"
                                className="trigger-button"
                                //   onClick={() => close()}
                                onClick={onRestart}
                            >
                                Restart Race
                            </button>
                            </div>

                        </div>

                    </>
                )}
            </Popup>
        </div>
    )
}
export default ReactPopUp