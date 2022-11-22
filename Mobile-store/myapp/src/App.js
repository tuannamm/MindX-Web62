// import libraries
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// import inventory (context)
import CartState from "./context/Cart/CartState";

// import components
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <CartState>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </CartState>
    </Router>
  );
};

export default App;
