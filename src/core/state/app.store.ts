import { combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { configureStore } from "@reduxjs/toolkit";
import {
  postReducers,
  postEpic
} from "../../modules/posts/state/PostStateSlice";

const epicMiddleware = createEpicMiddleware();

const appStore = configureStore({
  devTools: true,
  reducer: combineReducers({
    post: postReducers
  }),
  middleware: [epicMiddleware]
});

epicMiddleware.run(combineEpics(postEpic));

export default appStore;
