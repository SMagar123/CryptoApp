// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Copyright from "./components/Copyright";
import CoinHeader from "./components/CoinHeader";
import { BrowserRouter } from "react-router-dom";
import RoutingComponent from "./components/RoutingComponent";
import { createContext } from "react";
const CurrencyContext = createContext();
function App() {
  const currency = "Rs.";
  return (
    <BrowserRouter>
      <CurrencyContext.Provider value={currency}>
        <div className="App">
          <CoinHeader />
          <RoutingComponent />
          <Copyright />
        </div>
      </CurrencyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { CurrencyContext };
