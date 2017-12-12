import React, { Component } from 'react';
import StudentProfile from './students/StudentProfile.js';
import singleStudent from '../modules/singleStudent';


class SubPage1 extends Component {
	constructor(props) {
  super(props)
  this.state = { in: true }
	}
	componentWillAppear(cb) {
    console.log('TodoList componentWillAppear')
    setTimeout(cb, 500)
  }
  componentDidAppear() {
    console.log('TodoList componentDidAppear')
  }
  componentWillEnter(cb) {
    console.log('TodoList componentWillEnter')
    setTimeout(cb, 500)
  }
  componentDidEnter() {
    console.log('TodoList componentDidEnter')
  }
  componentWillLeave(cb) {
    console.log('TodoList componentWillLeave')
    cb()
  }
  componentDidLeave() {
    console.log('TodoList componentDidLeave')
  }
	render() {
		return (
			<div>
				<h1>Subpage 1</h1>
				jfkhjfglkjfkhjgkfjhkfjhk

			</div>
		);
	}
}

export default SubPage1;
