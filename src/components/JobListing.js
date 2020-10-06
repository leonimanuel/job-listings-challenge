import React, { Component } from 'react';
import "./job-listing.scss"

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