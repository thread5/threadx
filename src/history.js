/*
https://github.com/ReactTraining/history#usage

import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createMemoryHistory';
import createHistory from 'history/createHashHistory';
*/

/*
// question about history/createBrowserHistory warning #680
https://github.com/ReactTraining/history/issues/680

import createHistory from 'history/createBrowserHistory';
export default createHistory()
*/

import { createBrowserHistory } from 'history';

export default createBrowserHistory();
