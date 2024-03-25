// import About from "./components/About/About";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
// import { Routes, Route } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <Header />

      <div>Count: {count}</div>

      <button onClick={() => dispatch(increaseCounter())}>
        Increase Count
      </button>

      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease Count
      </button>
    </div>
  );
};

export default App;
