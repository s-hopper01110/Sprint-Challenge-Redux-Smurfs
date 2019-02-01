/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';

export const ADD_NEW_SMURF_START = 'ADD_NEW_SMURF_START';
export const ADD_NEW_SMURF_SUCCESS = 'ADD_NEW_SMURF_SUCCESS';
export const ADD_NEW_SMURF_FAILURE = 'ADD_NEW_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const fetchSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_START })
  axios.get('http://localhost:3333/smurfs' )
  .then(res => dispatch({ type: SMURFS_SUCCESS, payload: res.data}))
  .catch(err =>dispatch({ type: SMURFS_FAILURE, payload:err}))
}

export const addSmurf = (smurfS) => dispatch => {
  dispatch({ type: ADD_NEW_SMURF_START })
  axios.post('http://localhost:3333/smurfs', smurfS)
  .then(res => dispatch({ type: ADD_NEW_SMURF_SUCCESS, payload: res.data}))
  .catch(err =>dispatch({ type: ADD_NEW_SMURF_FAILURE , payload:err}))
}

