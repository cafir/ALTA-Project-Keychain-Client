import { combineReducers } from "redux";

import holders from './holders.js'
import auth from './auth.js'

export default combineReducers({ holders, auth });