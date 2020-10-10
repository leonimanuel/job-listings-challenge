import React, { Component } from 'react';
import {ReactComponent as RemoveIcon} from "../project_files/images/icon-remove.svg"

class Filter extends Component {
	render() {
		const { filter } = this.props
		return (
			<div className="filter-wrapper">
				<div className="tag filter-label">{filter}</div>
				<div className="filter-remove" onClick={this.props.onClickRemove}>
					<RemoveIcon/>
				</div>
			</div>
		)
	}
}

export default Filter;