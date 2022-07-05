import "../styles/App.scss";
import { Roulette } from "./Roulette";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/roulette-project/" element={<Roulette />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
