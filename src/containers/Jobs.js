import React, { Component } from 'react';
import JobListing from "../components/JobListing"

let jobData = require('../project_files/data.json')

class Jobs extends Component {
	createJobListings = () => {
		const { filters } = this.props
		return jobData.map(job => {
			if (filters.length === 0) {
				return <JobListing job={job} onFilterSelect={(filter) => this.props.onFilterAdd(filter)}/>
			}
			else if (
				filters.includes(job.role) 
				|| filters.includes(job.level)
				|| job.languages.find(lang => filters.includes(lang))
				|| job.tools.find(tool => filters.includes(tool))
			) {
				return <JobListing job={job} onFilterSelect={(filter) => this.props.onFilterAdd(filter)}/>
			}
		})
	}

	render() {
		debugger
		return (
			<div id="reviews-overview" className="overview-wrapper">
				{this.createJobListings()}
			</div>
		)
	}
}

export default Jobs;