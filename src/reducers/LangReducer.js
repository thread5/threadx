import { ACTION_TYPE_GET_LANG } from '../actions/MyActions.js';
import { ACTION_TYPE_SET_LANG } from '../actions/MyActions.js';


const initialState = {
  // lang: 'zh',
  lang: 'en',
};


export default function(state=initialState, action) {
  switch (action.type) {
    case ACTION_TYPE_GET_LANG:
      // console.log('ACTION_TYPE_GET_LANG')
      if (action.payload === null) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          lang: action.payload,
        };
      }
    case ACTION_TYPE_SET_LANG:
      // console.log('ACTION_TYPE_SET_LANG')
      return {
        ...state,
        lang: action.payload,
      }
    default:
      return state;
  }
};
