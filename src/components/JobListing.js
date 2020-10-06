import React, { Component } from 'react';

class JobListing extends Component {
	render() {
		return (
			<div id="reviews-overview" className="overview-wrapper">
				<div>{this.props.job.company}</div>
			</div>
		)
	}
}

export default JobListing;