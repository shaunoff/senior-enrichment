import * as actions from './actionTypes';

export default function reducers(state = {}, action){
  switch (action.type){
    case actions.GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
