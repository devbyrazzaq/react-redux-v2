import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  decrementByValue,
  increment,
  incrementAsync,
  incrementByValue,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <h2>{count}</h2>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          style={{ padding: "0.5rem 1rem" }}
          onClick={() => dispatch(increment())}
        >
          INCREMENT
        </button>
        <button
          style={{ padding: "0.5rem 1rem" }}
          onClick={() => dispatch(decrement())}
        >
          DECREMENT
        </button>
        <button
          style={{ padding: "0.5rem 1rem" }}
          onClick={() => dispatch(incrementByValue(10))}
        >
          INCREMENT BY 10
        </button>
        <button
          style={{ padding: "0.5rem 1rem" }}
          onClick={() => dispatch(decrementByValue(5))}
        >
          DECREMENT BY 5
        </button>
        <button
          style={{ padding: "0.5rem 1rem" }}
          onClick={() => dispatch(incrementAsync(8))}
        >
          {loading ? "Waiting for response..." : "INCREMENT ASYNC BY 8"}
        </button>
      </div>
    </>
  );
};

export default Counter;
