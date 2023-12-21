import './index.css'

const ParticipantsList = (props) => {
  const { eachItem } = props
  console.log(eachItem)
  const { text1, text2 } = eachItem
  return (
    <ul className='list-container'>
      <li>{text1}</li>
      <li>{text2}KM/H</li>
      <li>--</li>
      <li>--</li>
    </ul>

  )
}

export default ParticipantsList 