// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase.includes(searchInput),
    )
    return (
      <div className="bgContainer">
        <div className="destinationSearchCard">
          <h1 className="heading">Destination Search</h1>
          <div className="inputContainer">
            <input
              className="input"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              className="searchIcon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="listContainer">
            {searchResults.map(eachResult => (
              <DestinationItem
                placeDetailsElements={eachResult}
                key={eachResult.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
