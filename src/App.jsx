import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Navbar } from "./components/layouts/navbar/Navbar"
import { ImageSlider } from "./components/pages/imageSlider/ImageSlider"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { ProductDetail } from "./components/pages/productDetail/ProductDetail"
import { CategoryView } from "./components/pages/categoryView/CategoryView"
import { Footer } from "./components/layouts/footer/Footer"
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
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}
/* para mañana hacer footer, buscar buenas imagenes, agergar logo al cargando productos y sacar el logo pequeño del principio*/
export default App

