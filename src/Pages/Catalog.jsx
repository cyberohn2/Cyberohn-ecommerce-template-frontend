import React from 'react'
import ProductList from '../components/ProductList'
import CustomOrder from '../components/CustomOrder'
import Contact from '../components/Contact'

const Catalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2">
        <ProductList title="Catalog" />
      </main>
      <aside className="grid grid-cols-1 gap-2">
        <CustomOrder />
        <Contact />
      </aside>
    </div>
  )
}

export default Catalog
