import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import pets from './assets/pets';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.setState({pets:pets})
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }
  render() {
        const filteredPets = this.state.pets.filter((pet) => {
          return pet.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
        });
    return (
      <div className="App">
        <h1>Your Favourite Pet</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <Card pets={filteredPets} />
      </div>
    );
  }
}

export default App;
