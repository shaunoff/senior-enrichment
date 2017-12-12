import * as actions from './actionTypes';
import axios from 'axios';

export function fetchCampus (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => {
        const action = { type: actions.GET_CAMPUS, campus: campus[0] };
        dispatch(action);
      });
  };
}

export function updateCampus (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${data.id}`,data)
      .then(res => res.data)
      .then(campus => {
        const action = { type: actions.UPDATE_CAMPUS, campus: campus[0] };
        dispatch(action);
      });
  };
}

export function deleteCampus (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${id}`)
      .then( data => {
        const action = { type: actions.DELETE_CAMPUS, id};
        dispatch(action);
      });
  };
}
