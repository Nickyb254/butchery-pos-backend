import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
} from '../../actions/employees/AllEmployeesSlice';

const initialState = {
  loading: false,
  employees: [],
  error: '',
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        error: '',
      };
    case FETCH_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  employees: employeesReducer,
  // Add other reducers here if you have more
});
export default  rootReducer;
