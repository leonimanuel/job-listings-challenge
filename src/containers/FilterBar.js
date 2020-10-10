import React, { Component } from 'react';
import "./filter-bar.scss"

import Filter from "../components/Filter"

class FilterBar extends Component {
	render() {
		return (
			<div id="filter-bar">
				{this.props.filters.map(filter => <Filter filter={filter}/>)}			
			</div>
		)
	}
}

export default FilterBar;