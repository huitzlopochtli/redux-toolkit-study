import { useState } from "react";
import {
  useGlobalAppDispatch,
  useGlobalAppSelector,
} from "../../redux/app/store-hooks";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "../../redux/features/counter/counter-slice";

function Counter() {
  const [counterAmount, setCounterAmount] = useState(1);

  // const count = useGlobalAppSelector(selectCount);
  const count = useGlobalAppSelector((store) => store.counter.value);
  const globalDispatch = useGlobalAppDispatch();

  return (
    <div className="App">
      <input
        type="text"
        value={counterAmount}
        onChange={(e) => setCounterAmount(Number(e.target.value))}
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
