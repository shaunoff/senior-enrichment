import React, { Component } from 'react';
import CampusProfile from './CampusProfile'



class Campuses extends Component {

	render() {
		console.log(this.props)
		return (
			<div>
					<div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'flex-start'}}>
					{this.props.campuses.map((campus,index)=>
						<CampusProfile
							key={index}
							deleteCampus={this.props.deleteCampus}
							data={campus}
						/>
					)}
				</div>
			</div>
		);
	}

}

export default Campuses;
