import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// create a makeStore function
export const createStore = (preloadedState?: any) =>
  preloadedState
    ? configureStore({
        preloadedState,
        reducer: rootReducer,
      })
    : configureStore({
        reducer: rootReducer,
      });

export const store = configureStore({
  reducer: rootReducer,
});
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
