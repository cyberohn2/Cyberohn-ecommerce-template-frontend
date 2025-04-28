import React from 'react'
import CustomOrder from '../components/CustomOrder'
import Contact from '../components/Contact'

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2 h-fit bg-white sm:p-8 p-4 rounded-4xl">
        <div className="mb-4">
          <h1 className="xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold ">
            About Us
          </h1>
          <p className="text-gray-400">A brand passionate about delivering the best in quality, quantity and customer service.</p>
        </div>
        <div>
          <p>
            Pizz Treats is a peanut related product brand producing: <strong>Coated peanut</strong>, <strong>Roasted peanut</strong>, <strong>Peanut bars (kulikuli)</strong>, <strong>Peanut milk (Our Star Product)</strong>, <strong>Peanut oil</strong> and <strong>Peanut butter</strong>. While using <strong>"PEANOTT"</strong>, a Norwegian translation as the suffix or prefix for our product names.
          </p>
          <br />
          <p>
            Pizz Treat is a brand that's keen on producing healthy snacks that are not only consumable for the rich but the masses at large. We are a brand looking forward to expanding our brand products into other sectors for peanut allergic customers to fit in. 
          </p>
        </div>

      </main>
      <aside className="grid grid-cols-1 gap-2">
        <Contact />
        <CustomOrder />
      </aside>
    </div>
  )
}

export default AboutUs
