import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from './dataTypes'
  
  const initialState = {
    loading: false,
    users: [],
    posts:[],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DATA_SUCCESS:
        
        return {
          
          loading: false,
          users: action.payload.users,
          posts:action.payload.posts,
          error: ''
        }
      case FETCH_DATA_FAILURE:
        return {
          loading: false,
          users: [],
          posts:[],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  