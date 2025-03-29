import productImage from "/hero-img.webp";
import plusIcon from "/icon-plus.svg";
import minusIcon from "/icon-minus.svg";

const ProductList = () => {
  return (
    <div className="bg-white sm:p-8 p-4 rounded-4xl justify-between mt-2">
      <h1 className="xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold mb-4">Our Products</h1>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all long-animate"><img width={10} src={productImage} alt="" /></span>
            <div>
              <h3 className="text-lg font-bold">Peanott Milk</h3>
              <p className="text-sm">Healthy and nourishing groundnut milk</p>
            </div>
          </div>
          <div >
            <p className="font-semibold mb-2">₦500 each</p>
            <div className="flex items-center justify-between rounded-lg gap-4 bg-[#f7f8fd] p-3">
              <img src={minusIcon} alt="icon-minus" />
              <p >0</p>
              <img  src={plusIcon} alt="icon-plus" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all long-animate"><img width={10} src={productImage} alt="" /></span>
            <div>
              <h3 className="text-lg font-bold">Peanott Milk</h3>
              <p>Healthy and nourishing groundnut milk</p>
            </div>
          </div>
          <div >
            <p className="font-semibold mb-2">₦500 each</p>
            <div className="flex items-center justify-between rounded-lg gap-4 bg-[#f7f8fd] p-3">
              <img src={minusIcon} alt="icon-minus" />
              <p >0</p>
              <img  src={plusIcon} alt="icon-plus" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all long-animate"><img width={10} src={productImage} alt="" /></span>
            <div>
              <h3 className="text-lg font-bold">Peanott Milk</h3>
              <p>Healthy and nourishing groundnut milk</p>
            </div>
          </div>
          <div >
            <p className="font-semibold mb-2">₦500 each</p>
            <div className="flex items-center justify-between rounded-lg gap-4 bg-[#f7f8fd] p-3">
              <img src={minusIcon} alt="icon-minus" />
              <p >0</p>
              <img  src={plusIcon} alt="icon-plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default ProductList
