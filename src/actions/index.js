import axios from 'axios';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';
export const FETCH_START = 'FETCH_START';

//Fetch API Data
export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err });
    })
  }
    export const addSmurf = (smurf) => {
        return ({type: ADD_SMURF, payload: smurf})
    }
    export const setError = (error) => {
        return ({type: SET_ERROR, payload: error})
    }

export default fetchSmurfs;

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.