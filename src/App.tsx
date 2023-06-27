import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import NotFound from "./screens/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}
