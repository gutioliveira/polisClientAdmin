/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import * as types from "../actions";

function stateMap(loading, facebookLoading, error, facebookError, pending){
	return {loading: loading,
			facebookLoading: facebookLoading,
			error: error,
			facebookError: facebookError,
			pending: pending};
}

const signin = (state = {
  loading: false,
  facebookLoading: false,
  error: false,
  facebookError: false
}, action) => {
  switch (action.type) {
  case types.FACEBOOK_SIGNIN_INITIATED:
    return Object.assign({}, state, stateMap(false,true,false,false,false));
  case types.FACEBOOK_SIGNIN_SUCCESSFUL:
    return Object.assign({}, state, stateMap(false,false,false,false,false));
  case types.FACEBOOK_SIGNIN_FAILED:
    return Object.assign({}, state, stateMap(false,false,false,action.errorCode,false));
  case types.SIGNIN_INITIATED:
    return Object.assign({}, state, stateMap(false,false,false,false,true));
  case types.SIGNIN_ERROR:
    return Object.assign({}, state, stateMap(false,false,action.data,false,false));
  case types.CREATEUSER_INITIATED:
    return Object.assign({}, state, stateMap(false,false,false,false,true));
  case types.CREATEUSER_ERROR:
    return Object.assign({}, state, stateMap(false,false,action.data,false,false));
  default:
    return state;
  }
};

export default signin;