import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchStudents} from "../actions";
import {updateFilter} from '../../../store';
import students from "../index.js"

class StudentsContainer extends Component {
	componentDidMount(){
		this.props.fetchStudents();
	}
	render() {
		console.log(this.props)
		const {StudentsWrapper, StudentFilter} = students.components
		return (
			<StudentsWrapper {...this.props}/>
		);
	}
}


const filterStudents = (students,filter) => {
	let newStudents = [...students]
	if(filter.search){
		const regex = new RegExp(filter.search, 'i');
		newStudents = newStudents.filter((student)=>{
			return student.firstName.match(regex) || student.lastName.match(regex)
		})
	}
	if(filter.campuses){
		if(filter.campuses.length){
			newStudents = newStudents.filter(student => filter.campuses.indexOf(student.campusId) >= 0)
		}
	}
  if(filter.range){
    console.log(filter.range)
    newStudents = newStudents.filter(student => student.gpa >= filter.range[0] && student.gpa <= filter.range[1])
  }
	return newStudents
}


function mapStateToProps(state){
  return {
		students: filterStudents(state.students,state.filterStudents),
		filterStudents: state.filterStudents,
		campuses: state.campuses
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStudents,updateFilter}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentsContainer);
