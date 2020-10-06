import React, { Component } from 'react';
import JobListing from "../components/JobListing"

let jobData = require('../project_files/data.json')

class Jobs extends Component {
	createJobListings = () => {
		return jobData.map(job => <JobListing job={job}/>)
	}

	render() {
		return (
			<div id="reviews-overview" className="overview-wrapper">
				{this.createJobListings()}
			</div>
		)
	}
}

export default Jobs;