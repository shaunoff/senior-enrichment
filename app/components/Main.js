import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  addStudentThunk,
  fetchStudents,
  deleteStudentThunk,
  updateStudentThunk,
  addAssessmentThunk,
  addCampusThunk,
  fetchCampuses,
  deleteCampusThunk,
  updateCampusThunk,
} from '../store';


//import SingleStudentContainer from '../modules/singleStudent/containers/SingleStudentContainer';
import singleStudent from '../modules/singleStudent'
import singleCampus from '../modules/singleCampus'
import students from '../modules/students'
const {SingleStudentContainer} = singleStudent.containers
const {SingleCampusContainer} = singleCampus.containers
const {StudentsContainer} = students.containers

import SubPage1 from './SubPage1';
import SubPage2 from './SubPage2';
//import Students from './Students';
//import StudentUpdate from './students/StudentUpdate';
import StudentOverview from './students/StudentOverview';
import CampusUpdate from './CampusUpdate';
import CampusContainer from './campuses/CampusContainer';

import StudentContainer from './students/StudentContainer.js'
import AddButton from './utilities/AddButton';



class Main extends Component{
  componentDidMount(){
    this.props.getCampuses();
    this.props.getStudents();
  }
  render() {
    const {location,history} = this.props
    return (
      <div>
        <div style={{display: 'flex'}}>
          <Link to="/allstudents">students</Link>
          <Link to="/campuses">Campuses</Link>
          <AddButton history={history} addStudent={this.props.addStudent} addCampus={this.props.addCampus}/>
        </div>
        <h1>Students</h1>
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='fade'
              timeout={1000}
            >
              <Switch location={location}>
                <Route path='/students/:id' component={SingleStudentContainer} />
                <Route path='/allstudents' component={StudentsContainer} />
                <Route path='/campuses/:id' component={SingleCampusContainer} />
                <Route exact path="/" component={StudentsContainer}
                />
                <Route
                exact path="/allstudents" component={StudentsContainer}
                />
                <Route path="/campuses" component={CampusContainer} />
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    getStudents() {
      dispatch(fetchStudents());
    },
    deleteStudent(id) {
      dispatch(deleteStudentThunk(id));
    },
    addStudent(data) {
      dispatch(addStudentThunk(data));
    },
    updateStudent(data) {
      dispatch(updateStudentThunk(data));
    },
    addAssessment(data) {
      dispatch(addAssessmentThunk(data));
    },
    getCampuses() {
      dispatch(fetchCampuses());
    },
    deleteCampus(id) {
      dispatch(deleteCampusThunk(id));
    },
    addCampus(data) {
      dispatch(addCampusThunk(data));
    },
    updateCampus(data) {
      dispatch(updateCampusThunk(data));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));




{/* <Switch>

  <Route
    exact
    path="/1"
    children={(props) => (
      <TransitionGroup component={firstChild}>
        <SubPage1 {...props} />
      </TransitionGroup>
  )}/>

  <Route exact path="/2" component={SubPage2}/>



  <Route exact path="/students/:id" render={
    (props) =>
      (<StudentUpdate
        {...props}
        updateStudent={this.props.updateStudent}
        students={this.props.students}
      />)
    }
  />
  <Route exact path="/campuses/:id" render={
    (props) =>
      (<CampusUpdate
        {...props}
        updateCampus={this.props.updateCampus}
        campuses={this.props.campuses}
      />)
    }
  />
<Route
exact path="/students" render={(props) =>
  (<Students
    {...props}
    deleteStudent={this.props.deleteStudent}
    addStudent={this.props.addStudent}
    students={this.props.students}
  />)}
/>

<Route
path="/campuses" render={() =>
  (<Campuses
    deleteCampus={this.props.deleteCampus}
    addCampus={this.props.addCampus}
    campuses={this.props.campuses}
  />)}
/>
</Switch> */}
