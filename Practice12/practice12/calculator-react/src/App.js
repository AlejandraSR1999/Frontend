import "./App.css";
import Calculator from "./features/calculator/Calculator";
import { Provider } from "react-redux";
import store from "./features/calculator/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    </Provider>
  );
}

export default App;
