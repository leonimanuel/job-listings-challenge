import React, { Component } from 'react';

class Filter extends Component {
	render() {
		return (
			<div className="filter">
				{this.props.filter}
			</div>
		)
	}
}

export default Filter;