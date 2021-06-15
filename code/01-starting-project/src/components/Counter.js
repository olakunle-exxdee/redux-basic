import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, show } from "../redux/counterSlice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  const [value, setValue] = useState("");

  const toggleCounterHandler = () => {
    dispatch(show());
  };
  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const handleAdd = () => {
    dispatch(
      add({
        value: value,
      })
    );
    setValue("");
  };
  const handleSubtract = () => {
    dispatch(subtract({ value: value }));
    setValue("");
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter && (
        <div>
          <input type="text" value={value} onChange={handleOnChange} />
          <div className={classes.value}>{state.value}</div>
        </div>
      )}
      <div className="">
        <button onClick={handleAdd}>add</button>
        <button onClick={handleSubtract}>substract</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
