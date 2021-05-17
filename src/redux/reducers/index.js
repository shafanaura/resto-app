import { combineReducers } from "redux";

import restoReducer from "./resto.reducer";

const reducer = combineReducers({
  resto: restoReducer,
});

export default reducer;
