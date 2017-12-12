import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const Campus = ({data, deleteCampus}) => {
	return <Link to={`campuses/${data.id}`}>{data.name}</Link>;
};


export default Campus;
