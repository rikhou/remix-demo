import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import rootReducer from "../reducers";

// create a makeStore function
const makeStore = (/* context: Context */) =>
  configureStore({
    // preloadedState,
    reducer: rootReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
