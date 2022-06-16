import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderCompnent from "./components/headerComponent";
import BasketPage from "./pages/cart";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
        <HeaderCompnent />
        <div className="content">
          <div className="container">
            <Routes>
              <Route index element={ <HomePage /> } />
              <Route path="/cart" element={ <BasketPage /> } />
              <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
          </div>
        </div>
  </div>
  );
}
export default App;