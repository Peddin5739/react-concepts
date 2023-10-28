import { createStore } from "redux";
import rootReducer from "../reducers";
export default function ConfigureStore() {
  return createStore(rootReducer);
}
