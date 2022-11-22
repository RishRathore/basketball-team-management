import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import playerReducer from "./features/playerSlices";

const reducers = combineReducers({
  basketball: playerReducer,
});

export const store = configureStore({
  reducer: reducers,
});