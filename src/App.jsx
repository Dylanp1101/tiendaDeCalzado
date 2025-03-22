import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ImageSlider } from "./components/pages/imageSlider/ImageSlider";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ProductDetail } from "./components/pages/productDetail/ProductDetail";
import { CategoryView } from "./components/pages/categoryView/CategoryView";
import { Footer } from "./components/layouts/footer/Footer";
import { Checkout } from "./components/pages/checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <ItemListContainer />
              </>
            }
          />
          <Route path="/category/:categoryId" element={<CategoryView />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
