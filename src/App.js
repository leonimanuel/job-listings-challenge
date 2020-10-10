import React, {Component} from 'react';
import MediaQuery from 'react-responsive';

import logo from './logo.svg';
import './App.css';

import Jobs from "./containers/Jobs";
import FilterBar from "./containers/FilterBar";

class App extends Component {
  state = {
  	filters: []
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
	  return (
	    <div className="App">
	    	<MediaQuery maxWidth={375}>
		    	<img className="header-image" src={require("./project_files/images/bg-header-mobile.svg")} alt="mobile header design" />    		
	    	</MediaQuery>
	    	<MediaQuery minDeviceWidth={376}>
		    	<img className="header-image" src={require("./project_files/images/bg-header-desktop.svg")} alt="desktop header design" />    		
	    	</MediaQuery>

	      {filters.length ? <FilterBar filters={filters} onFilterRemove={(filter) => this.removeFilter(filter)} onClearFilters={this.clearFilters} /> : null}
	      <Jobs filters={filters} onFilterAdd={(filter) => this.addFilter(filter)} />
	    </div>
	  );
	}
}

export default App;
