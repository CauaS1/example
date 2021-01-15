import { POST, RETWEET, LIKE } from '../actions/index';
const postReducer = (state = [], action) => {
  switch (action.type) { //The return is already a "break";
    case POST:
      return [...state, {
        id: Math.random(),
        text: action.text,
        like: false,
        retweet: false
      }]
    case RETWEET: //There are two ways to verify 
      return state.map(item => {
        if(item.id === action.id) {
          return {...item, retweet: (item.id === action.id)}
        }
      });
    case LIKE:
      return state.map(item => {
        if(item.id === action.id)
          return {...item, like: true}
      })
    default:
      return state;
  }
}

export default postReducer;