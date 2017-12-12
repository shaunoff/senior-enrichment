import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import campuses from './campuses';
import students from './students';
import filterStudents from './filterStudents';
import singleStudent from '../modules/singleStudent'
import singleCampus from '../modules/singleCampus'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  singleStudent: singleStudent.reducers,
  singleCampus: singleCampus.reducers,
  campuses,
  students,
  form,
  filterStudents
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware,createLogger())
))

export default store;

export * from './campuses';
export * from './students';
export * from './filterStudents';
