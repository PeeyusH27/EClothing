import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')


  const fetchProuctData = async () => {
    products.map((item) => {

      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProuctData()
  }, [productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* ======= Product Data ======= */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">


        {/* ======= Product Images ======= */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((img, index) => (
                <img onClick={() => setImage(img)} src={img} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* ===== Product Information ====== */}
        <div className="flex-1">
          <h1 className='font-medium text-3xl mt-2'>{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-3 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((sizes, index) => (
                  <button onClick={() => setSize(sizes)} className={`border py-2 px-4 ${sizes == size ? 'font-bold shadow-inner shadow-gray-400 border-rose-950' : ''} bg-gray-200`} key={index}>{sizes}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery available</p>
            <p>Easy return & exchange policy within 7days.</p>
          </div>
        </div>
      </div>
      {/* Description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>This is an e-commerce platform that facilitates hassle free online shopping of clothes.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quis voluptas rerum accusamus et laborum animi quod molestiae quibusdam sint? Pariatur fugit quos dolorem inventore quia doloribus libero eveniet nobis?
            Sapiente ipsam accusantium fuga natus impedit deserunt officiis aut omnis corporis quisquam iusto, magni hic voluptatum, nemo magnam voluptas suscipit soluta sequi necessitatibus iure quae autem reiciendis. Itaque, aliquam officia.</p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts  category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product