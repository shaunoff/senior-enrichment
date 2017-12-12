
const FILTER_STUDENTS = 'FILTER_STUDENTS'

export function updateFilter(filter) {
  const action = { type: FILTER_STUDENTS, filter };
  return action;
}



// REDUCER
export default function reducer (state = {}, action) {

  switch (action.type) {
    case FILTER_STUDENTS:
      return action.filter;
    default:
      return state;
  }

}
