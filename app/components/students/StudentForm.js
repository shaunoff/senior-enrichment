import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField} from 'redux-form-material-ui'
import { withRouter } from 'react-router-dom'

const StudentForm = ({ modal, history, update,initialValues, reset, updateStudent, addStudent, handleSubmit, pristine, submitting }) => (
	<form
		onSubmit={handleSubmit(formData => {
			if (initialValues){
				console.log(formData)
				updateStudent(formData)
				update()
			}
			else {
				addStudent(formData);
				reset();
				modal()
				history.push('/students')
			}

		})}
	>
		<div style={{display: 'flex', flexDirection: 'column'}}>

			<Field name="firstName" floatingLabelText="First Name" component={TextField} type="text" />

			<Field name="lastName" floatingLabelText="Last Name" component={TextField} type="text" />

			<Field name="email" floatingLabelText="Email" component={TextField} type="text" />

			{!initialValues && <Field name="campusId"  floatingLabelText="Campus" component={TextField} type="text" />}
		</div>
		<button type="submit" disabled={pristine || submitting}>
			Submit
		</button>
	</form>
);

export default withRouter(reduxForm({ form: 'studentForm' })(StudentForm));
