import { ACTION_TYPE_GET_LANG } from './MyActions.js';
import { ACTION_TYPE_SET_LANG } from './MyActions.js';


// export const getLang = () => dispatch => {}
export function getLang() {
  return function(dispatch) {
    // console.log('getLang, pretend to do http get request');
    let lang = localStorage.getItem('lang');
    // console.log('read from localStorage, ' + lang);

    dispatch({
      type: ACTION_TYPE_GET_LANG,
      payload: lang,
    });
  };
};


export function setLang(lang) {
  return function(dispatch) {
    // console.log('setLang, pretend to do http post request');

    localStorage.setItem('lang', lang);

    dispatch({
      type: ACTION_TYPE_SET_LANG,
      payload: lang,
    });
  };
};
