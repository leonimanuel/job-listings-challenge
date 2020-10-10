import React, { Component } from 'react';
import JobListing from "../components/JobListing"

let jobData = require('../project_files/data.json')

class Jobs extends Component {
	state = {
		filters: []
	}

	addFilter = (filter) => {
		this.setState({filter: this.state.filters.push(filter)})
	}

	createJobListings = () => {
		const { filters } = this.state
		return jobData.map(job => {
			if (
				filters.includes(job.role) 
				|| filters.includes(job.level)
				|| job.languages.find(lang => filters.includes(lang))
				|| job.tools.find(tool => filters.includes(tool))
			) {
				return (
					<JobListing job={job}/>
				)
			}
		})
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