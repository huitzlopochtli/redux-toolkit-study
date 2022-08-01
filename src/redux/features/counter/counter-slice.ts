import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

// Define the slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment by 1
    increment: (state) => {
      state.value++;
    },
    // decrement by 1
    decrement: (state) => {
      state.value--;
    },
    // reset
    reset: (state) => {
      state.value = initialState.value;
    },
    // increment by a fixed value
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // decrement by a fixed value
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

// Export the reducer actions
export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

// export the reducer from the slice as default export
const counterReducer = counterSlice.reducer;
export default counterReducer;
