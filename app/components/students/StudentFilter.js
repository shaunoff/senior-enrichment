import React, { Component } from 'react';
import Checkbox from '../utilities/Checkbox'
import RangeSlider from '../utilities/RangeSlider'
import CampusIconName from '../campuses/CampusIconName'
import TextField from 'material-ui/TextField';

class StudentFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			campuses: [],
			range: [0,4]
		};
		this.handleCheckbox = this.handleCheckbox .bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRange = this.handleRange.bind(this)
	}
	handleCheckbox(val){
		if(this.state.campuses.indexOf(val) >= 0){
			const newArray = this.state.campuses.filter(campus => campus !== val)
			this.setState({
	        campuses: newArray
	    }, () => {
	     this.props.updateFilter(this.state)
	    })
		}
		else {
			this.setState({
	        campuses: [...this.state.campuses,val]
	    }, () => {
	     this.props.updateFilter(this.state)
	    })
		}

	}
	handleChange(event,value){
		this.setState({
        search: value
    }, () => {
     this.props.updateFilter(this.state)
    })
	}
	handleRange(value){
		this.setState({
        range: value
    }, () => {
     this.props.updateFilter(this.state)
    })
	}
	render() {
		return (
			<div style={styles.wrapper}>
				<h3 style={{...styles.heading, marginBottom: "0px"}}>Search</h3>
					  <div style={{margin: '15px', width: "100%"}}>
						<TextField style={{width: "220px",marginTop: "-5px"}} onChange={this.handleChange} floatingLabelText="Name"/>

					</div>
					<h3 style={styles.heading}>Campuses</h3>
					{this.props.campuses.map((campus) => <Checkbox key={campus.id} label={campus.id} component={()=><CampusIconName campus={campus.id} name={campus.name}/>} handleCheckboxChange={this.handleCheckbox}/>)}
					<h3 style={styles.heading}>GPA</h3>
					<RangeSlider handleRange={this.handleRange}/>
			</div>
		);
	}

}

export default StudentFilter;

const styles = {
	wrapper: {
		height:"600px",
		marginTop: '15px'
	},
	heading: {
		marginLeft: "15px"
	}
}
