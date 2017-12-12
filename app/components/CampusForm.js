import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'

const CampusForm = ({ modal,history,initialValues,reset, updateCampus, addCampus, handleSubmit, pristine, submitting }) => (
	<form
		onSubmit={handleSubmit(formData => {
			if (initialValues){
				updateCampus(formData)
			}
			else {
				addCampus(formData);
				reset();
				modal()
				history.push('/students')
			}

		})}
	>
		<div>
			{console.log(history)}
			<label htmlFor="firstName">Name</label>
			<Field name="name" component="input" type="text" />
			<label htmlFor="lastName">ImageUrl</label>
			<Field name="imageUrl" component="input" type="text" />
			<label htmlFor="lastName">Description</label>
			<Field name="description" component="input" type="text" />
		</div>
		<button type="submit" disabled={pristine || submitting}>
			Submit
		</button>
	</form>
);

export default withRouter(reduxForm({ form: 'campusForm' })(CampusForm));
