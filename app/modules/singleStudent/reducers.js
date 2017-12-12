import * as actions from './actionTypes';

export default function reducers(state = {}, action){
  switch (action.type){
    case actions.GET_STUDENT:
      return action.student;
    case actions.ADD_ASSESSMENT:
      return action.student;
    case actions.UPDATE_STUDENT:
      return action.student[0];
    case actions.DELETE_STUDENT:
        return {};
    default:
      return state;
  }
}
