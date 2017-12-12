import React, { Component } from 'react';
import CampusForm from './CampusForm';
import CampusText from './CampusText';
import CampusStudent from './CampusStudent';

class SingleCampusWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			update: false,
			delete: false,
			text: true,
		};
		this.switchUpdate = this.switchUpdate.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	switchUpdate(){
		this.setState({
			update: !this.state.update,
			text: !this.state.text
		})
	}
	handleDelete(){
		console.log(this.props.singleCampus.id)
		this.props.deleteCampus(this.props.singleCampus.id);
		this.props.history.push('/allstudents')
	}
	render() {
		const campus = this.props.singleCampus
		if(!campus.id){
			return <div>Loading....</div>
		}
		return (
			<div style={{ display: 'flex', height: 'calc(100vh - 130px)', borderRadius: '8px',backgroundColor: 'rgba(255,255,255,0.7)', marginRight: "10px"}}>
				<div style={styles.campusBlock}>
					<div style={styles.svgWrapper}>
							<img style={styles.campusSvg} src={`/graphics/planets/${(campus.id%6)+1}.svg`}/>
					</div>

					{this.state.text && <CampusText campus={campus} switchUpdate={this.switchUpdate} deleteCampus={this.handleDelete} />}
					{this.state.update && <CampusForm updateCampus={this.props.updateCampus} switchUpdate={this.switchUpdate} initialValues={campus}/>}
				</div>
				<div style={{flex: 1, display: 'flex',flexDirection: 'column'}}>
					{campus.students.map(student => <CampusStudent key={student.id} data={student}/>)}
				</div>
			</div>
		);
	}

}
const styles={
	campusBlock: {
		background: 'white',
		borderRadius: '12px',
		width: '420px',
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
	campusSvg: {
		filter: "drop-shadow(2px 2px 2px grey)",
		opacity: "0.7",
		height: "340px",

	},


}
export default SingleCampusWrapper;
