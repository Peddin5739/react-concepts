import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../actions/counterActions.jsx";

export default function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>decrement</button>
    </div>
  );
}
