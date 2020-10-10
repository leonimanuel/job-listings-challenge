import React, { Component } from 'react';
import JobListing from "../components/JobListing";

let jobData = require('../project_files/data.json');

class Jobs extends Component {
	createJobListings = () => {
		const { filters } = this.props;
		return jobData.map(job => {
			const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

			if (filters.length === 0 || filters.every(filter => jobTags.includes(filter))) {
				return <JobListing job={job} onFilterSelect={(filter) => this.props.onFilterAdd(filter)}/>
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