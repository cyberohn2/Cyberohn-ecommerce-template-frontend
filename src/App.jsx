import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StoreFront from "./Pages/StoreFront"
import AboutUs from "./Pages/AboutUs"
import Catalog from "./Pages/Catalog"
import OrderSummary from "./Pages/OrderSummary"
import { CartProvider } from "./Contexts/CartContext"
import Reviews from "./Pages/Reviews"
import ScrollToTop from "./components/ScrollToTop"
import CheckoutPage from "./Pages/CheckoutPage"

function App() {

  return (
    <div className="bg-[var(--bg)] font-(family-name:--font) relative overflow-x-hidden">
      <CartProvider>
        <Router>
          <Header />
          <ScrollToTop />
          <Routes >
            <Route exact path="/" element={<StoreFront />}></Route>
            <Route exact path="/about-us" element={<AboutUs />}></Route>
            <Route exact path="/catalog" element={<Catalog />}></Route>
            <Route exact path="/reviews" element={<Reviews />}></Route>
            <Route exact path="/order-summary" element={<OrderSummary />}></Route>
            <Route exact path="/checkout" element={<CheckoutPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>

    </div>
  )
}

export default App
