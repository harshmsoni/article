import { createStore } from "redux";
import rootReducer from "./Reducer/Root";
const store= createStore(rootReducer);
export default store