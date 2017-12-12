import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchCampus,updateCampus,deleteCampus} from "../actions";

import singleCampus from "../index.js"

class SingleCampusContainer extends Component {
	componentDidMount(){
		this.props.fetchCampus(this.props.match.params.id);
	}
	render() {
		const {SingleCampusWrapper } = singleCampus.components
		return (
			<SingleCampusWrapper {...this.props}/>
		);
	}
}


function mapStateToProps(state){
  return {
    singleCampus: state.singleCampus,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCampus,updateCampus,deleteCampus}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusContainer);
