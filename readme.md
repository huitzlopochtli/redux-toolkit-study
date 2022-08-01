# React Redux Toolkit Study

### Project Creation and Usage

```console
foo@bar:~$ npm create vite@latest myapp --template redux-ts
foo@bar:~$ cd myapp
foo@bar:myapp$ npm i @reduxjs/toolkit react-redux
foo@bar:myapp$ npm run dev
 VITE v3.0.4  ready in 797 ms

  ➜  Local:   http://localhost:3000/
```

## Create slice in features folder

---

#### 1. Define a type for the slice state

```ts
interface CounterState {
  value: number;
}
```

#### 2. Define the initial state using that type

```ts
const initialState: CounterState = {
  value: 0,
};
```

#### 3. Define the slice

```ts
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // increment by a fixed value
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
```

#### 4. Export the reducer actions to be used in dispatch

```ts
export const { incrementByAmount } = counterSlice.actions;
```

#### 5. export the reducer from the slice as default export

```ts
const counterReducer = counterSlice.reducer;
export default counterReducer;
```

## Create the store

---

#### 1. Configure the store

```ts
export const store = configureStore({
  // add the reducers
  reducer: {
    counter: counterReducer,
  },
});
```

#### 2. Infer the `RootState` and `AppDispatch` types from the store itself

```ts
// Inferred type: { counter: CounterState; }
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: ThunkDispatch<{ counter: CounterState; }, undefined, AnyAction> & Dispatch<AnyAction>
export type AppDispatch = typeof store.dispatch;
```

### 🎉🎉🎉🎉 Store setup is completed 🎉🎉🎉🎉

---

### Inject the store into Application Root ie. `Index.ts`

---

### With `<Provider store={store}>` from `react-redux` and wrap the `<App>`

```ts
import { store } from "./redux/app/store";
...
...
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}> 👈
    <App />
  </Provider>
);
```

## Usage

---

#### In component use `useGlobalAppSelector` and `useGlobalAppDispatch` to get the state and the dispatch

```ts
// option 1. to get state
const count = useGlobalAppSelector((store) => store.counter.value);
```

```ts
// 📁 src/redux/features/counter/counter-slice.ts
export const selectCount = (state: RootState) => state.counter.value;
...
// option 2. use selector to get the state
const count = useGlobalAppSelector(selectCount);
```

```ts
// get the dispatch
const globalDispatch = useGlobalAppDispatch();
// call the dispatch
globalDispatch(incrementByAmount(someValue));
```
