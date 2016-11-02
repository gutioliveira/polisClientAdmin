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

const conversation_config = (state = {
  loading: false,
  conversation_config: null,
  update_error: null
}, action) => {
  switch (action.type) {

  default:
    return state;
  }
};

export default conversation_config;
