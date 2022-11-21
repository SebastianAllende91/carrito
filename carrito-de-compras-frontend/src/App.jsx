import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
