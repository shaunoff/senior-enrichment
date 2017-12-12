import React, { Component } from 'react';
import StudentForm from './StudentForm';
import {SelectField, MenuItem, RaisedButton} from 'material-ui';
class StudentAssessment extends Component {
	constructor(){
		super();
		this.state = {
			score: null
		}
		this.handleChange= this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
	}
	handleChange(event,index,payload){
		this.setState({score: payload})
	}
	handleSubmit(){
		this.props.addAssessment({
			id: this.props.id,
			score: this.state.score
		})
		this.props.update()
	}
	render() {
		return (
			<div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
				<div>
					<SelectField
	          hintText="Input Assessment"
						onChange={this.handleChange}
						value = {this.state.score}
	        >
	          <MenuItem value={0} primaryText="0" />
	          <MenuItem value={1} primaryText="1" />
	          <MenuItem value={2} primaryText="2" />
	          <MenuItem value={3} primaryText="3" />
	          <MenuItem value={4} primaryText="4" />
	        </SelectField>
				</div>
				<div>
					<RaisedButton onClick={this.handleSubmit} label="Submit" />
				</div>

			</div>
		);
	}

}

export default StudentAssessment;
