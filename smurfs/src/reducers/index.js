/*
  Be sure to import in all of the action types from `../actions`
*/

import 
{  
   SMURFS_START,
   SMURFS_SUCCESS,
   SMURFS_FAILURE,

//    ADD_NEW_SMURF_START,
//    ADD_NEW_SMURF_SUCCESS,
//    ADD_NEW_SMURF_FAILURE

} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
 
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
      case SMURFS_START:
      return {
          ...state,
          fetchingSmurfs: true
      }

      case SMURFS_SUCCESS:
      return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs:false,
      }

      case SMURFS_FAILURE:
      return {
          ...state,
          error: action.payload,
          fetchingSmurfs:false
      }

      case 'ADD_NEW_SMURF_START':
      return {
          ...state,
          error: action.payload,
          addingSmurf: true
      }

      case 'ADD_NEW_SMURF_SUCCESS':
      return {
          ...state,
          fetchingSmurfs:false,
          error: null,
          smurfs: action.payload
      }

      case 'ADD_NEW_SMURF_FAILURE':
      return {
          ...state,
          error: action.payload,
          addingSmurf: false
      }


  default:
      return state;
  }
}

export default smurfsReducer;