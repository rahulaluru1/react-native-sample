import axios from 'axios'
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './dataTypes'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios
      .all([
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
      .then( axios.spread((users,posts) => {
        const usersData = users.data
        const postsData = posts.data
        dispatch(fetchDataSuccess(usersData,postsData))
      }))
      .catch(error => {
        dispatch(fetchDataFailure(error.message))
      })
  }
}

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const fetchDataSuccess = (users,posts )=> {
  // console.log(users)
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {users,posts}
  }
}

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}
