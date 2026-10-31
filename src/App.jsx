import LiveTimer from "./fundamentals/use-effect/challenges/LiveTimer";
import UserGreeting from "./fundamentals/use-effect/challenges/UserGreeting";
import CounterTitle from "./fundamentals/use-effect/practice/CounterTitle";
import MountMessage from "./fundamentals/use-effect/practice/MountMessage";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <CounterTitle /> */}
      {/* <MountMessage /> */}
      <LiveTimer />
      {/* <UserGreeting name="Yash" /> */}
      {/* <UserGreeting name="Yash Developer" /> */}
    </div>
  );
};

export default App;
