import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import counterAmountReducer from "../features/counter/counter-amount-slice";
import counterReducer from "../features/counter/counter-slice";
import apiPostsReducer, { apiPostsSlice } from "../features/Posts/api-posts-slice";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

// Configure the store
export const store = configureStore({
  // add the reducers
  reducer: {
    router: routerReducer,
    counter: counterReducer,
    counterAmount: counterAmountReducer,
    [apiPostsSlice.reducerPath]: apiPostsReducer,
  },
  // middleware: [routerMiddleware],
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(routerMiddleware)
      .concat(apiPostsSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: { counter: CounterState; }
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: ThunkDispatch<{ counter: CounterState; }, undefined, AnyAction> & Dispatch<AnyAction>
export type AppDispatch = typeof store.dispatch;

export const history = createReduxHistory(store);
