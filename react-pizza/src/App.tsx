import { Route, Routes } from "react-router-dom";
import HeaderCompnent from "./components/headerComponent";
import BasketPage from "./pages/cart";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import FullPizza from "./pages/fullPizza";

function App() {
  return (
    <div className="wrapper">
        <HeaderCompnent />
        <div className="content">
          <div className="container">
            <Routes>
              <Route index element={ <HomePage /> } />
              <Route path="/pizza/:pizzaid" element={ <FullPizza /> } />
              <Route path="/cart" element={ <BasketPage /> } />
              <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
          </div>
        </div>
  </div>
  );
}
export default App;