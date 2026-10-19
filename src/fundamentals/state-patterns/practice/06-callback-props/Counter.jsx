const Counter = ({ count, onDecrease, onIncrease }) => {
  //   const onIncrease = () => setCount(count + 1);
  //   const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};
export default Counter;
