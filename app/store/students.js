import axios from 'axios';

// ACTION TYPES
//const GET_CAMPUS = 'GET_CAMPUS';
const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const ADD_ASSESSMENT = 'UPDATE_STUDENT'

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function deleteStudent(id) {
  const action = { type: DELETE_STUDENT, id };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function updateStudent(student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

export function addAssessment(student) {
  const action = { type: ADD_ASSESSMENT, student };
  return action;
}

// THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function addStudentThunk (data) {
  return function thunk (dispatch) {
    return axios.post(`/api/students/`, data)
      .then(res => res.data)
      .then( data => {
        const action = addStudent(data);
        dispatch(action);
      });
  };
}

export function updateStudentThunk (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${data.id}`, data)
      .then(res => res.data)
      .then( data => {
        console.log(data)
        const action = updateStudent(data[0]);
        dispatch(action);
      });
  };
}

export function addAssessmentThunk (data) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/assessment/${data.id}`, {assessment: data.score})
      .then(res => res.data)
      .then( data => {
        console.log(data)
        const action = addAssessment(data);
        dispatch(action);
      });
  };
}

export function deleteStudentThunk (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${id}`)
      .then( data => {
        const action = deleteStudent(id);
        dispatch(action);
      });
  };
}




// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state,action.student];
		case DELETE_STUDENT:
				const newStudents = state.filter(student => student.id !== action.id)
	      return newStudents;
    case UPDATE_STUDENT:
				const newId = action.student.id;
        const newAssessment = state.map((student) => {
          if (student.id !== newId) return student
          else return {
            ...student,
            assessments: action.student.assessments
          }
        })
        return newAssessment
    case UPDATE_STUDENT:
        const updatedId = action.student.id;
				const newArray = state.map((student) => {
          if (student.id !== updatedId) return student
          else{
            return {
              ...student,
              firstName: action.student.firstName,
              lastName: action.student.lastName,
              email: action.student.email,
              name: action.student.name
            }
          }
        })
	      return newArray;
    default:
      return state;
  }

}
