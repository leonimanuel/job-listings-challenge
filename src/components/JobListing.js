import React, { Component } from 'react';
import "./job-listing.scss"

    // "new": true,
    // "featured": true,
    // "position": "Senior Frontend Developer",
    // "role": "Frontend",
    // "level": "Senior",
    // "postedAt": "1d ago",
    // "contract": "Full Time",
    // "location": "USA Only",
    // "languages": ["HTML", "CSS", "JavaScript"],
    // "tools": []

class JobListing extends Component {
	render() {
		const { job } = this.props
		return (
			<div className="job-wrapper">
				<div className="details-wrapper">
					<div className="company">{job.company}</div>
					<div className="position">{job.position}</div>
					<div className="posting-details">
						<div className="postedAt">{job.postedAt}</div>
						<div className="contract">{job.contract}</div>
						<div className="location">{job.location}</div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default JobListing;





