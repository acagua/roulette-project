import "../styles/App.scss";
import { Roulette } from "./Roulette";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <Roulette />
    </Provider>
  );
}

export default App;
