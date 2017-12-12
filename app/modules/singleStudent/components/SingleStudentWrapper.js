import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Info from 'react-icons/lib/io/ios-informatoutline';

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import StudentMetaData from './StudentMetaData'
import StudentAssessment from './StudentAssessment'
import StudentForm from './StudentForm'
import StudentChart from './StudentChart'


class SingleStudentWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			assessment: false,
			update: false,
			delete: false,
			text: true,
		};
		this.handleUpdate = this.handleUpdate.bind(this)
		this.handleAssessment = this.handleAssessment.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	handleUpdate(){
		this.setState({
			update: !this.state.update,
			text: !this.state.text
		})
	}
	handleAssessment(){
		this.setState({
			assessment: !this.state.assessment,
			text: !this.state.text
		})
	}
	handleDelete(){
		this.props.deleteStudent(this.props.singleStudent.id);
		this.props.history.push('/allstudents')
	}
	render() {
		console.log(this.props)
		const student = this.props.singleStudent
		if(!student.id){
			return <div>loading...</div>
		}
		return (
			<div style={{ display: 'flex', height: 'calc(100vh - 130px)', borderRadius: '8px',backgroundColor: 'rgba(255,255,255,0.7)', marginRight: "10px"}}>
				<div style={styles.studentBlock}>
					<div style={styles.svgWrapper}>
							<img style={styles.studentSvg} src={`/graphics/${(student.id%30)+1}.svg`}/>
					</div>
					<div style={{height: "300px"}}>
						{this.state.assessment && <StudentAssessment id={student.id} addAssessment={this.props.addAssessment} update={this.handleAssessment}/>}
						{this.state.update && <StudentForm update={this.handleUpdate} updateStudent={this.props.updateStudent} initialValues={student} />}
					  {this.state.text && <StudentMetaData deleteStudent={this.handleDelete} assessment={this.handleAssessment} update={this.handleUpdate} student={student}/>}
					</div>
				</div>
				<div style={{width: "1500px",height: 'calc(100vh - 130px)'}}>
					<StudentChart student={student}/>
				</div>
			</div>
		);
	}

}
const styles={
	studentBlock: {
		background: 'white',
		flex: 1,
		borderRadius: '12px',
		minWidth: '420px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
		margin: '10px',
		textDecoration: 'none',
		padding: '10px',
	},
	chartBlock: {
		background: 'white',
		flex: 1,
		borderRadius: '12px',
		height: 'calc(100vh - 230px)',
		boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
		margin: '10px',
		textDecoration: 'none',
		padding: '40px',
	},
	svgWrapper: {
		marginTop: '30px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '340px',
		height: '340px',
		//boxShadow: "0 1px 5px rgba(0, 0, 0, 0.46)",
		padding: '5px',
		//border: '0.1px solid #ccc'
	},
	studentSvg: {
		filter: "drop-shadow(2px 2px 2px grey)",
		opacity: "0.7",
		height: "340px",

	},


}
export default SingleStudentWrapper;
