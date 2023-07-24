// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetailsElements} = props
  const {name, imgUrl} = placeDetailsElements
  return (
    <li className="resultCard">
      <img className="image" alt={name} src={imgUrl} />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem
