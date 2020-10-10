import React, { Component } from 'react';
import "./filter-bar.scss"

import Filter from "../components/Filter"

class FilterBar extends Component {
	render() {
		const { filters } = this.props
		return (
			<div className={`filter-bar ${filters.length ? null : "hidden"}`}>
				<div id="filter-bar-content">
					<div id="filters-container">
						{filters.map(filter => <Filter key={filter} filter={filter} onClickRemove={() => this.props.onFilterRemove(filter)}/>)}			
					</div>	
					
					<div id="clear-filters-button" onClick={this.props.onClearFilters}>Clear</div>		
				</div>
			</div>
		)
	}
}

export default FilterBar;