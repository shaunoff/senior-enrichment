import React, { Component } from 'react';
import CampusForm from './CampusForm'

class CampusUpdate extends Component {

	render() {
		if (this.props.campuses.length === 0){
    return <div>Loading......</div>
    }
		const paramId = +this.props.match.params.id
		const campus = this.props.campuses.filter(campus => campus.id === paramId)[0]
		return (
			<div>
				<div>{campus.name}</div>
				<CampusForm updateCampus={this.props.updateCampus} initialValues={campus}/>
			</div>
		);
	}

}

export default CampusUpdate;
