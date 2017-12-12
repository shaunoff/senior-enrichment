import React from 'react'
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'
import Info from 'react-icons/lib/io/ios-informatoutline';

const styles={
	campusBlock: {
		background: 'white',
		height: '180px',
		borderRadius: '12px',
		flex: 1,
		maxWidth: '420px',
		display: 'flex',
		boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
		margin: '10px',
		textDecoration: 'none',
		padding: '10px',
	},
	svgWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '80px',
		borderRadius: '50%',
		//boxShadow: "0 1px 5px rgba(0, 0, 0, 0.46)",
		padding: '10px',
		//border: '0.1px solid #ccc'
	},
	campusSvg: {
		filter: "drop-shadow(2px 2px 2px grey)",
		opacity: "0.7",
		maxHeight: "80px",
		maxWidth: '100%',
		height: 'auto',
	},
	textBlock: {
		justifyContent: 'space-between',
		minWidth: "200px",
		height: '40px',
		display: 'flex',

	},
	descriptionBlock: {
		borderLeft: "1px solid #ccc",
		flex: "1",
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: '10px',
		marginLeft: '10px'
	},
	descriptionText: {
		marginTop: '15px',
		color: "#aaa",
		display: 'flex',
		height: '120px',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	}
}
const average = (students) => {
	const sum = students.reduce((a,b)=> a + parseFloat(b.gpa), 0)
	return parseFloat(sum / students.length)
}
const CampusProfile = ({data}) => (
	<div style={styles.campusBlock}>
		<div style={styles.svgWrapper}>

				<img style={styles.campusSvg} src={`/graphics/planets/${(data.id%6)+1}.svg`}/>
		</div>
		<div style={styles.descriptionBlock}>
			<div style={styles.textBlock}>
				<h3 style={{marginTop: "10px", marginBottom: '5px'}}>{data.name}</h3>
				<div style={{marginTop: '13px'}}>
					<ReactStars style={{marginTop: "-10px"}} count={5} edit={false} half={true} value={average(data.students)} size={14} color1="#ccc" color2={'#93a5cf'} />
				</div>
			</div>
			<div style={styles.descriptionText}>
				{data.description}
			</div>

				<div style={{display: "flex"}}>
					<div style={{flex: 1}}>
						{data.students.map(student => <img style={{width: '20px', opacity: 0.7, margin: '5px'}} src={`/graphics/${(student.id%30)+1}.svg`}/>)}
					</div>
					<Link to={`/campuses/${data.id}`}>
						<Info style={{fontSize: '40px',width: "40px", color:"#ccc"}} />
					</Link>

				</div>


		</div>

	</div>
);

export default CampusProfile;
