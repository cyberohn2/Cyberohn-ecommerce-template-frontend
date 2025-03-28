import Contact from "../components/Contact"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import CustomOrder from "../components/CustomOrder"



const StoreFront = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2">
        <Hero />
        <ProductList />
      </main>
      <aside className="grid grid-cols-1 gap-2">
        <CustomOrder />
        <Contact />
      </aside>
    </div>
  )
}

export default StoreFront
