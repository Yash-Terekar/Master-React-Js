import Message from "./fundamentals/state/practice/01-basic-state/Message";
import Counter from "./fundamentals/state/practice/02-counter/Counter.jsx";
import Toggle from "./fundamentals/state/practice/03-toggle/Toggle.jsx";
import NameInput from "./fundamentals/state/practice/04-input-state/NameInput.jsx";

const App = () => {
  return (
    <div>
      <Message />
      <Counter />
      <Toggle />
      <NameInput />
    </div>
  );
};

export default App;
