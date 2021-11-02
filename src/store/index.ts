import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./interfaces";
import navigationReducer from './navigation';

const reducer: Reducer<RootState> = combineReducers<RootState>({
  navigation: navigationReducer,
});

export default configureStore({
  reducer
})