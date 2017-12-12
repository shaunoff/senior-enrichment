import React from 'react';

const CampusIconName = ({campus, name}) => (
	<div style={{display: 'flex', alignItems: "center", margin: '10px'}}>
		<img style={{width: "30px",opacity: '0.7',marginRight: '10px'}} src={`/graphics/planets/${(campus%10)+1}.svg`}/>
		<div>{name}</div>
	</div>

);

export default CampusIconName ;
