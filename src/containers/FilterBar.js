import React, { Component } from 'react';
import "./filter-bar.scss"

import Filter from "../components/Filter"

class FilterBar extends Component {
	render() {
		return (
			<div id="filter-bar">
				<div id="filters-container">
					{this.props.filters.map(filter => <Filter filter={filter} onClickRemove={() => this.props.onFilterRemove(filter)}/>)}			
				</div>	
				
				<div id="clear-filters-button" onClick={this.props.onClearFilters}>Clear</div>		
			</div>
		)
	}
}

export default FilterBar;