import { useState } from "react";
import { history, store } from "../../redux/app/store";
import {
  useGlobalAppDispatch,
  useGlobalAppSelector,
} from "../../redux/app/store-hooks";
import { setCounterAmount } from "../../redux/features/counter/counter-amount-slice";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "../../redux/features/counter/counter-slice";

function Counter() {
  const counterAmount = useGlobalAppSelector(
    (store) => store.counterAmount.value
  );

  // const count = useGlobalAppSelector(selectCount);
  const count = useGlobalAppSelector((store) => store.counter.value);
  const globalDispatch = useGlobalAppDispatch();

  return (
    <div className="App">
      <input
        type="text"
        value={counterAmount}
        onChange={(e) =>
          globalDispatch(setCounterAmount(Number(e.target.value)))
        }
      />
      <div className="card">
        <button
          onClick={() => globalDispatch(decrementByAmount(counterAmount))}
        >
          -
        </button>
        <button>count is {count}</button>
        <button
          onClick={() => globalDispatch(incrementByAmount(counterAmount))}
        >
          +
        </button>
      </div>
      <button onClick={() => globalDispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
