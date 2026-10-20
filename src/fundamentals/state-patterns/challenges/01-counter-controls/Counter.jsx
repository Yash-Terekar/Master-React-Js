const Counter = ({ count, reset, onIncrease, onDecrease }) => {
  return (
    <div>
      <p>===========================================</p>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={onDecrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={onIncrease}>+</button>
      <p>===========================================</p>
    </div>
  );
};
export default Counter;
