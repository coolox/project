/** @format */

import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/products" className="link">
          Products
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
