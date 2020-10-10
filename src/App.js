import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Jobs from "./containers/Jobs"
import FilterBar from "./containers/FilterBar"

class App extends Component {
  state = {
  	filters: ["Frontend"]
  }
  
	addFilter = (filter) => {
		this.setState({filter: this.state.filters.push(filter)});
	}  

	render() {
	  const { filters } = this.state
	  return (
	    <div className="App">
	      <FilterBar filters={filters} />
	      <Jobs onFilterAddToApp={(filter) => this.addFilter(filter)} />
	    </div>
	  );
	}
}

export default App;
