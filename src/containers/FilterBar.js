import React, { Component } from 'react';

class FilterBar extends Component {
	render() {
		return (
			<div>
				{this.props.filters.map(filter => <div>{filter}</div>)}			
			</div>
		)
	}
}

export default FilterBar;