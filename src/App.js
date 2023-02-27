// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Copyright from "./components/Copyright";
import CoinHeader from "./components/CoinHeader";

function App() {
  return (
    <div className="App">
      <CoinHeader />
      <Copyright />
    </div>
  );
}

export default App;
