import React from 'react'
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'
import Info from 'react-icons/lib/io/ios-informatoutline';



const StudentProfile = ({data}) => (
	<Link to={`students/${data.id}`} style={styles.studentBlock}>
		<div style={styles.svgWrapper}>
				<img style={styles.studentSvg} src={`/graphics/${(data.id%30)+1}.svg`}/>
		</div>
		<div style={styles.textBlock}>
			<h3 style={{marginTop: "10px", marginBottom: '5px'}}>{data.name}</h3>
			<p style={{color: "#6bada7", fontSize: "14px", marginTop: '0px',marginBottom: '4px'}}>{data.email}</p>
			<ReactStars style={{marginTop: "-10px"}} count={5} edit={false} half={true} value={parseFloat(data.gpa)} size={14} color1="#ccc" color2={'#93a5cf'} />
		</div>
		<div style={{width: "50px",display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
			<img style={{width: "40px",opacity: '0.7',filter: "drop-shadow(2px 2px 2px grey)"}} src={`/graphics/planets/${(data.campusId%10)+1}.svg`}/>
			<Info style={{fontSize: '40px',width: "40px", color:"#ccc"}} />
		</div>
	</Link>
);

export default StudentProfile;


const styles={
	studentBlock: {
		background: 'white',
		height: '90px',
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
		width: '80px',
		height: '80px',
		borderRadius: '50%',
		//boxShadow: "0 1px 5px rgba(0, 0, 0, 0.46)",
		padding: '5px',
		//border: '0.1px solid #ccc'
	},
	studentSvg: {
		filter: "drop-shadow(2px 2px 2px grey)",
		opacity: "0.7",
		maxHeight: "80px",
		maxWidth: '100%',
		height: 'auto',
	},
	textBlock: {
		borderLeft: "1px solid #ccc",

		minWidth: "200px",
		flex: "1",
		display: 'flex',
		flexDirection: 'column',
    paddingLeft: '10px',
		marginLeft: '10px'
	}

}
