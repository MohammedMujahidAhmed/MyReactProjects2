import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import { NavBar } from "./Components/NavBar";

const App = () => {
  return (
    <div>
      
      <div className="bg-cyan-950">
          <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={ <HomePage/> } ></Route>      
        <Route path="/cart" element={ <CartPage/> } ></Route>      
      </Routes>

  </div>
  );
};

export default App;
