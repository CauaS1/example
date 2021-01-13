import { POST } from '../actions/index';
const postReducer = (state = [], action) => {
  switch(action.type) {
    case POST: 
      return {
        text: [...state, {
          id: Math.random(),
          text: action.text
        }]
      }
    default:
      return state;  
  }
}

export default postReducer;