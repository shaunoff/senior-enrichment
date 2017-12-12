import axios from 'axios';

// ACTION TYPES
//const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function deleteCampus(id) {
  const action = { type: DELETE_CAMPUS, id };
  return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function updateCampus(campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
}
// THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function addCampusThunk (data) {
  return function thunk (dispatch) {
    return axios.post(`/api/campuses/`, data)
      .then(res => res.data)
      .then( data => {
        const action = addCampus(data);
        dispatch(action);
      });
  };
}

export function deleteCampusThunk (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${id}`)
      .then( data => {
        const action = deleteCampus(id);
        dispatch(action);
      });
  };
}



export function updateCampusThunk (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${data.id}`, data)
      .then(res => res.data)
      .then( data => {
        const action = updateCampus(data[0]);
        dispatch(action);
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return [...state,...action.campuses];
    case ADD_CAMPUS:
      console.log("add campus", action)
      return [...state,action.campus];
		case DELETE_CAMPUS:
      console.log("acccctionnnn" , action)
			const newCampuses = state.filter(campus => campus.id !== action.id)
      return newCampuses;
    case UPDATE_CAMPUS:
      const updatedId = action.campus.id;
			const newArray = state.map((campus) => {
        if (campus.id !== updatedId) return campus
        return action.campus
      })
      return newArray;
    default:
      return state;
  }

}
