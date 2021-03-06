import React, { Component } from 'react';
import Campuses from './Campuses';
import Scroll from 'react-awesome-scroll';
import StudentProfile from '../students/StudentProfile';
import {fetchCampuses} from '../../store';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CampusContainer extends Component {
	componentDidMount(){
		this.props.fetchCampuses()
	}

	render() {
		return (
				<div style={{overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 400px', height: 'calc(100vh - 130px)', width: 'calc(100vw - 20px)'}}>
					<div style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.7)', width: '100%', marginRight: '10px'}}>
						<Campuses {...this.props}/>
					</div>
	        <div style={{padding: '10px', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.7)', marginLeft: '15px', width: '380px', height: 'calc(100vh - 130px)'}}>
	          <Scroll className="scroll">
							<div style={{display: 'flex', flexDirection: 'column'}}>
								{this.props.students.map(student => <StudentProfile key={student.id} data={student}/>)}
							</div>

	          </Scroll>
	        </div>
				</div>
		);
	}

}
function mapStateToProps(state){
  return {
    campuses: state.campuses,
		students: state.students
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCampuses}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CampusContainer);
