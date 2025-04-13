import Contact from "../components/Contact"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import CustomOrder from "../components/CustomOrder"
import { Link } from "react-router-dom"



const StoreFront = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2">
        <Hero />
        <div className="bg-[white] pb-4 rounded-4xl">
          <ProductList title="Our Products" />
          <Link to="/catalog" className="text-center block text-white font-bold text-lg bg-[var(--yellow)] w-fit p-2 rounded-xl mx-auto">See More</Link>
        </div>
      </main>
      <aside className="grid grid-cols-1 gap-2">
        <CustomOrder />
        <Contact />
      </aside>
    </div>
  )
}

export default StoreFront
