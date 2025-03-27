import AuthorCard from "../components/AuthorCard"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"



const StoreFront = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
      <main className="col-span-2">
        <Hero />
        <ProductList />
      </main>
      <aside>
        <Contact />
        <AuthorCard />
      </aside>
    </div>
  )
}

export default StoreFront
