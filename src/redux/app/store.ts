import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

// Configure the store
export const store = configureStore({
  // add the reducers
  reducer: {
    counter: counterReducer,
  },
});
store.subscribe(() => console.log(store.getState()));

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: { counter: CounterState; }
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: ThunkDispatch<{ counter: CounterState; }, undefined, AnyAction> & Dispatch<AnyAction>
export type AppDispatch = typeof store.dispatch;
