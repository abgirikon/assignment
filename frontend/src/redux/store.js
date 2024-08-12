import { thunk } from "redux-thunk";
import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
let middle = applyMiddleware(thunk);

if (process.env.REACT_APP_NODE_ENV !== "production") {
    const { composeWithDevTools } = require("@redux-devtools/extension");
    middle = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(rootReducer, middle);

export default store;
