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

const StudentMetaData = ({campus,switchUpdate,deleteCampus}) => (
	<div style={styles.textBlock}>
		<div>
			<h3 style={{marginTop: '10px', marginBottom: '5px'}}>{campus.name}</h3>
			<p style={{color: '#6bada7', fontSize: '14px', marginTop: '0px', marginBottom: '4px'}}>{campus.description}</p>
		</div>

		<div style={{display: 'flex', alignItems: 'flex-end'}}>

			<RaisedButton
				style={{margin: "10px"}}
				target="_blank"
				label="Update"
				onClick={switchUpdate}

			/>
			<RaisedButton
				style={{margin: "10px"}}
				target="_blank"
				label=" Delete"
				onClick={deleteCampus}
			/>

		</div>
	</div>
);

export default StudentMetaData;
