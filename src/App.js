import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Jobs from "./containers/Jobs"
import FilterBar from "./containers/FilterBar"

class App extends Component {
  state = {
  	filters: ["CSS"]
  }
  
	addFilter = (filter) => {
		if (!this.state.filters.includes(filter)) {
			this.setState({filters: [...this.state.filters, filter]}, () => {
				console.log(this.state.filters)
			});
		}
	}  

	removeFilter = (removed_filter) => {
		this.setState({filters: this.state.filters.filter(filter => filter !== removed_filter)}, () => {
			console.log(this.state.filters)
		})
	}

	clearFilters = () => {
		this.setState({filters: []})
	}

	render() {
	  const { filters } = this.state
	  debugger
	  return (
	    <div className="App">
	      <FilterBar filters={filters} onFilterRemove={(filter) => this.removeFilter(filter)} onClearFilters={this.clearFilters} />
	      <Jobs filters={filters} onFilterAdd={(filter) => this.addFilter(filter)} />
	    </div>
	  );
	}
}

export default App;
