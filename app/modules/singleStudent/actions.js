import * as actions from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3009/api/students';

export function fetchStudent (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => {
        const action = { type: actions.GET_STUDENT, student };
        dispatch(action);
      });
  };
}

export function addAssessment (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/assessment/${data.id}`, {assessment: data.score})
      .then(res => res.data)
      .then(student => {
        const action = { type: actions.ADD_ASSESSMENT, student };
        dispatch(action);
      });
  };
}

export function updateStudent (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${data.id}`, data)
      .then(res => res.data)
      .then(student => {
        const action = { type: actions.UPDATE_STUDENT, student };
        dispatch(action);
      });
  };
}

export function deleteStudent (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => {
        const action = { type: actions.DELETE_STUDENT};
        dispatch(action);
      });
  };
}
