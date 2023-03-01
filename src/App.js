// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Copyright from "./components/Copyright";
import CoinHeader from "./components/CoinHeader";
import { BrowserRouter } from "react-router-dom";
import RoutingComponent from "./components/RoutingComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CoinHeader />
        <RoutingComponent />
        <Copyright />
      </div>
    </BrowserRouter>
  );
}

export default App;
