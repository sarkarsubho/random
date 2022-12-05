import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import { Signup } from "./Components/Authentication/Signup";
import { Navbar } from "./Components/Navigation/Navbar";
import { Help } from "./Components/Page/Help";
import { Men } from "./Components/Product/Men";
import { NewArrivals } from "./Components/Product/NewArrivals";
import { Product } from "./Components/Product/Product";
import { Women } from "./Components/Product/Women";
import { ProductDetails } from "./Components/Product/ProductDetails";
import { Cart } from "./Components/Cart/Cart";
import { Successful } from "./Components/Page/Successful";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Product></Product>
      <Men></Men>
      <Women></Women>
      <NewArrivals></NewArrivals>
      <Help></Help>
      <Login></Login>
      <Signup></Signup> */}
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/newarrivals" element={<NewArrivals />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/suc" element={<Successful />}></Route>
      </Routes>
    </div>
  );
}

export default App;
