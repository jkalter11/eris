import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import serverErrorsReducer from './server_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
  sessionErrors: sessionErrorsReducer,
  serverErrors: serverErrorsReducer,
});

export default errorsReducer;
