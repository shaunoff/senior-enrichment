import React, { Component } from 'react';
import {connect} from 'react-redux';
import Students from './Students'
import Scroll from 'react-awesome-scroll';

import {
  addStudentThunk,
  fetchStudents,
  deleteStudentThunk,
  updateStudentThunk,
	updateFilter,
  addAssessmentThunk

} from '../../store';


import StudentFilter from './StudentFilter'

class StudentContainer extends Component {
	render() {
		return (
			<div style={{overflow: 'hidden',display: 'grid', gridTemplateColumns: "250px 600px", height: 'calc(100vh - 130px)', width: 'calc(100vw - 20px)'}}>
				<div style={{ borderRadius: '8px',backgroundColor: 'rgba(255,255,255,0.7)', width: "250px",marginRight: "10px"}}>
					<StudentFilter campuses={this.props.campuses} filter={this.props.filterStudents} updateFilter={this.props.updateFilter}/>
				</div>
        <div style={{padding: "10px",borderRadius: '8px', overflow: "hidden", backgroundColor: 'rgba(255,255,255,0.7)', marginLeft: "15px", width: 'calc(100vw - 300px)', height: 'calc(100vh - 130px)'}}>
          <Scroll className="scroll"
          containerClassName="scroll-container"
          innerClassName="scroll-inner"
          scrollClassName="scroll-track"
          barClassName="scroll-bar"
          barActiveClassName="scroll-bar-active">
            <Students {...this.props}/>
          </Scroll>
        </div>
			</div>
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


const mapStateToProps = (state) => {
  return {
    students: filterStudents(state.students,state.filterStudents),
		filterStudents: state.filterStudents,
		campuses: state.campuses
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getStudents() {
      dispatch(fetchStudents());
    },
    deleteStudent(id) {
      dispatch(deleteStudentThunk(id));
    },
    addStudent(data) {
      dispatch(addStudentThunk(data));
    },
    updateStudent(data) {
      dispatch(updateStudentThunk(data));
    },
    updateAssessment(data) {
      dispatch(addAssessmentThunk(data));
    },
		updateFilter(filter) {
      dispatch(updateFilter(filter));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
