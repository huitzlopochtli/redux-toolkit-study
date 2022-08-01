import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterAmount {
  value: number;
}

// Define the initial state using that type
const initialState: CounterAmount = {
  value: 5,
};

// Define the slice
const counterAmountSlick = createSlice({
  name: "counter-amount",
  initialState: initialState,
  reducers: {
    setCounterAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export the reducer actions to be used in dispatch
export const { setCounterAmount } = counterAmountSlick.actions;

// export the reducer from the slice as default expor
const counterAmountReducer = counterAmountSlick.reducer;
export default counterAmountReducer;
