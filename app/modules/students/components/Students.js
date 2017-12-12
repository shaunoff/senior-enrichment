import React, { Component } from 'react';
import StudentProfile from './StudentProfile'



class Students extends Component {

	render() {
		return (
			<div >
					<div>
						<div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'flex-start'}}>
						{this.props.students.map((student,index)=>
							<StudentProfile
								key={index}
								deleteStudent={this.props.deleteStudent}
								data={student}
							/>
						)}
						</div>
					</div>
			</div>
		);
	}

}

export default Students;
