import * as actions from './actionTypes';
import axios from 'axios';

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = { type: actions.GET_STUDENTS, students };
        dispatch(action);
      });
  };
}
