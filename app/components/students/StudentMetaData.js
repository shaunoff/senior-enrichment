import React from 'react';
import ReactStars from 'react-stars';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	textBlock: {
		marginTop: '30px',
		width: '90%',
		height: '260px',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTop: '1px solid #ccc',
		display: 'flex',
		flexDirection: 'column',
    padding: '10px',

	}
};

const StudentMetaData = ({student,update,assessment}) => (
	<div style={styles.textBlock}>
		<div>
			<h3 style={{marginTop: '10px', marginBottom: '5px'}}>{student.name}</h3>
			<p style={{color: '#6bada7', fontSize: '14px', marginTop: '0px', marginBottom: '4px'}}>{student.email}</p>
			<ReactStars style={{marginTop: '-10px'}} count={5} edit={false} half={true} value={parseFloat(student.gpa)} size={14} color1="#ccc" color2={'#93a5cf'} />
		</div>

		<div style={{display: 'flex', alignItems: 'flex-end'}}>
			<RaisedButton
				style={{margin: "10px"}}
				target="_blank"
				label="Assessment"
				onClick={assessment}

			/>
			<RaisedButton
				style={{margin: "10px"}}
				target="_blank"
				label="Update"
				onClick={update}

			/>
			<RaisedButton
				style={{margin: "10px"}}
				target="_blank"
				label=" Delete"
			/>

		</div>
	</div>
);

export default StudentMetaData;
