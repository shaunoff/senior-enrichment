import React from 'react';
import StudentFilter from './StudentFilter'
import Students from './Students'
import Scroll from 'react-awesome-scroll';

const StudentsWrapper = (props) => (
	<div style={{overflow: 'hidden',display: 'grid', gridTemplateColumns: "250px 600px", height: 'calc(100vh - 130px)', width: 'calc(100vw - 20px)'}}>
		<div style={{ borderRadius: '8px',backgroundColor: 'rgba(255,255,255,0.7)', width: "250px",marginRight: "10px"}}>
			<StudentFilter campuses={props.campuses} filter={props.filterStudents} updateFilter={props.updateFilter}/>
		</div>
		<div style={{padding: "10px",borderRadius: '8px', overflow: "hidden", backgroundColor: 'rgba(255,255,255,0.7)', marginLeft: "15px", width: 'calc(100vw - 300px)', height: 'calc(100vh - 130px)'}}>
			<Scroll className="scroll"
			containerClassName="scroll-container"
			innerClassName="scroll-inner"
			scrollClassName="scroll-track"
			barClassName="scroll-bar"
			barActiveClassName="scroll-bar-active">
				<Students {...props}/>
			</Scroll>
		</div>
	</div>
);

export default StudentsWrapper;
