import React, { Component } from 'react';
import {ReactComponent as RemoveIcon} from "../project_files/images/icon-remove.svg"

class Filter extends Component {
	render() {
		return (
			<div className="filter-wrapper">
				<div className="tag filter-label">{this.props.filter}</div>
				<div className="filter-remove"><RemoveIcon /></div>
			</div>
		)
	}
}

export default Filter;