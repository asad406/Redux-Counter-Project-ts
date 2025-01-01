import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };
  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <button onClick={()=>handleIncrement(5)}>Increment By 5</button>
        <br />
        <br />
        <button onClick={()=>handleIncrement(1)}>Increment By 1</button>
        <p>{count}</p>
        <button onClick={()=>handleDecrement(1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
