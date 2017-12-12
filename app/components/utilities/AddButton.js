import React, { Component } from 'react';
import {TweenLite, TimelineLite} from "gsap";
import Add from 'react-icons/lib/md/add';
import {Dialog} from 'material-ui';
import StudentForm from '../students/StudentForm'
import CampusForm from '../CampusForm'

const tl = new TimelineLite();
let open = false
class AddButton extends Component {
	constructor(){
		super();
		this.state={
			modal: false,
			type: '',
		}
		this.handleModal = this.handleModal.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	handleClick (event){
		const object = this.refs.addButton
		const buttons = this.refs.buttons
		if(!open){
			tl.to(object, 1, {height: '180px', scale: 1, ease:"Elastic.easeOut"})
			.to(buttons, 1, {opacity: 1, ease:Elastic.easeOut},"-=0.75");
		}
		else {
			tl.to(buttons, 0.3, {opacity: 0})
			.to(object, 1, {height: '60px',ease:"Elastic.easeOut"})
		}
		open =!open
	}
	handleModal (value){
		console.log("jhgjhgjkhgfjkhgfjk")
		this.setState({
			modal: !this.state.modal,
			type: value
		})
	}
	handleClose (){
		this.setState({modal: false})
	}
	render() {
		return (
			<div ref="addButton" onClick={this.handleClick.bind(this)} style={
				{position: 'absolute',
				background: "#6bada7",
				 width: '60px',
				 height: '60px',
				 borderRadius: '30px',
				 right: '15px',
				 top: '15px',
				 zIndex: '3000',
				 filter: "drop-shadow(2px 2px 2px grey)"
				}}>
				<Add size={30} style={{zIndex: "3006", marginLeft: '15px', marginTop: '15px',color: 'white'}}/>
				<div
					ref="buttons"
					style={
					{position: 'absolute',

					 top: "60px",
					 opacity: 0,
					 width: '60px',
					 height: '150px',
					 borderRadius: '30px'
					}}>
					<div>
						<img onClick={()=>this.handleModal('campus')} style={{margin: '10px',width: "40px",opacity: '1',filter: "drop-shadow(2px 2px 2px grey)"}} src={`/graphics/blank_campus.svg`}/>
						<img onClick={()=>this.handleModal('student')} style={{marginLeft: '14px', width: "30px",opacity: '1',filter: "drop-shadow(2px 2px 2px grey)"}} src={`/graphics/blank-student.svg`}/>
					</div>
					<Dialog
					          title="Dialog With Actions"
					          modal={false}
										contentStyle={{width: "600px"}}
					          open={this.state.modal}
					          onRequestClose={this.handleClose}
					        >
					          <div style={{display: 'flex'}}>
											<div style={{flex: 1}}>
												{this.state.type === 'student' ? <StudentForm modal={this.handleModal} addStudent={this.props.addStudent}/> : <CampusForm  modal={this.handleModal} addCampus={this.props.addCampus}/> }
											</div>

											<div style={{flex: 1, height: "100%"}}>
												<img style={{width: "60%"}} src={`/graphics/5.svg`}/>
											</div>
										</div>
					</Dialog>
				</div>
			</div>
		);
	}

}

export default AddButton;
