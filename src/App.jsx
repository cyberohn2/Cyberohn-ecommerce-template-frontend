import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StoreFront from "./Pages/StoreFront"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Catalog from "./Pages/Catalog"
import Services from "./Pages/Services"
import Checkout from "./Pages/Checkout"
import OrderSummary from "./Pages/OrderSummary"
import ProductPage from "./Pages/ProductPage"
import ShippingDetails from "./Pages/ShippingDetails"

function App() {

  return (
    <div className="bg-[var(--bg)] font-(family-name:--font) relative overflow-x-hidden">
      <Router>
        <Header />
        <Routes >
          <Route exact path="/" element={<StoreFront />}></Route>
          <Route exact path="/about-us" element={<AboutUs />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/catalog" element={<Catalog />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/order-summary" element={<OrderSummary />}></Route>
          <Route exact path="/product-page" element={<ProductPage />}></Route>
          <Route exact path="/shipping-details" element={<ShippingDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
