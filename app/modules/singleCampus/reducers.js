import * as actions from './actionTypes';

export default function reducers(state = {}, action){
  switch (action.type){
    case actions.GET_CAMPUS:
      return action.campus;
    case actions.UPDATE_CAMPUS:
      return action.campus;
    case actions.DELETE_CAMPUS:
        return {};
    default:
      return state;
  }
}
