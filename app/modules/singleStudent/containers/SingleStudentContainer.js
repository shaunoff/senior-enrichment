import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchStudent,addAssessment,updateStudent,deleteStudent} from "../actions";

import singleStudent from "../index.js"

class SingleStudentContainer extends Component {
	componentDidMount(){
		this.props.fetchStudent(this.props.match.params.id);
	}
	render() {
		const {SingleStudentWrapper } = singleStudent.components
		return (
			<SingleStudentWrapper {...this.props}/>
		);
	}
}


function mapStateToProps(state){
  return {
    singleStudent: state.singleStudent,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStudent,addAssessment,updateStudent,deleteStudent}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleStudentContainer);
