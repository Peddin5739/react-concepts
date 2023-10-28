import { combineReducers } from "redux";
import CounterReducer from "./counterreducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
});
export default rootReducer;
