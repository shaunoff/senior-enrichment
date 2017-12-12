import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import { RaisedButton } from 'material-ui';

const CampusForm = ({ switchUpdate, initialValues,reset, updateCampus, addCampus, handleSubmit, pristine, submitting }) => (
	<form
		onSubmit={handleSubmit(formData => {
			if (initialValues){
				updateCampus(formData)
				switchUpdate()
			}
			else {
				addCampus(formData);
				reset();
				history.push('/campuses')
			}

		})}
	>
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Field name="name" floatingLabelText="Name" component={TextField} type="text" />
			<Field name="description" floatingLabelText="Name" multiLine={true} rows={3} component={TextField} type="text" />
		</div>
		<RaisedButton type="submit" disabled={pristine || submitting}>
			Submit
		</RaisedButton>
	</form>
);

export default reduxForm({ form: 'campusForm' })(CampusForm);
