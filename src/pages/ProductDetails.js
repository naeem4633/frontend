import {React, useState} from 'react'
import Carousel from '../components/Carousel';

const ProductDetails = () => {
    let [quantity, setQuantity] = useState(1);

    const images = [
        'sample-image-1.jpg',
        'sample-image-2.jpg',
        'sample-image-3.jpg',
        'sample-image-4.jpg',
        'sample-image-5.jpg',
        'sample-image-6.jpg',
        'sample-image-7.jpg',
        'sample-image-7.jpg',
        'sample-image-7.jpg',
        'sample-image-7.jpg',
        'sample-image-7.jpg',
        'sample-image-7.jpg',
      ];
  return (
    <section className='w-full relative flex flex-col tracking-wide mt-16'>
        <div className='mx-auto w-3/4 flex flex-row tracking-wide border border-black p-4'>
            <div className='w-1/2 flex flex-col'>
                <div className='h-[60vh] border border-black'>
                    <img className='w-full h-4/5 border border-black'></img>
                    <div className='h-1/5'>carousel here.</div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col sapce-y-4'>
                <div className='w-3/4'>
                    <div className='w-full border border-black p-4 space-y-2'>
                        <p className='text-2xl'>Wet n Wild Color Icon Lipliner</p>
                        <p className='text-gray-500'>0 reviews</p>
                    </div>
                    <div className='w-full border border-black p-4 space-y-2'>
                        <p className='text-xl font-bold'>$7.3</p>
                    </div>
                    <div className='w-full border border-black p-4'>
                        <p className='text-gray-500'>$2.0 on credit</p>
                        <p className='text-sm'>Shopping limit for new users: $10 - $50</p>
                    </div>
                    <div className='w-full border border-black p-4 space-y-2'>
                        <div className='p-3 border border-[#c82f7e]'>Select your Shade / Size</div>
                        <div className='flex flex-row items-center'>
                            <div onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}  className='w-12 h-12 color-secondary flex items-center justify-center'>
                                <img src='../static/images/minus.png' className='w-6 h-6'></img>
                            </div>
                            <p className='w-16 h-12 text-xl text-center pt-2.5 border border-[#c82f7e]'>{quantity}</p>
                            <div onClick={() => setQuantity(quantity + 1)}  className='w-12 h-12 color-secondary flex items-center justify-center'>
                                <img src='../static/images/plus.png' className='w-6 h-6'></img>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border border-black p-4 space-y-2'>
                        <p className='text-sm text-gray-500'>Sku: prod.sku</p>
                        <button className='flex flex-row color-secondary w-40 h-14 items-center rounded px-4 space-x-4'>
                            <img src='../static/images/cart.png' className='w-5 h-5'></img>
                            <p className='text-white font-semibold'>Add to cart</p>
                        </button>
                    </div>
                    <div className='w-full text-sm'>
                        <div className='flex flex-row items-center justify-between border border-gray-200 p-2'>
                            <p>Product Description</p>
                            <img className='w-4 h-4' src='../static/images/plus-black.png'></img>
                        </div>
                        <div className='flex flex-row items-center justify-between border border-gray-200 p-2'>
                            <p>Product Description</p>
                            <img className='w-4 h-4' src='../static/images/plus-black.png'></img>
                        </div>
                        <div className='flex flex-row items-center justify-between border border-gray-200 p-2'>
                            <p>Product Description</p>
                            <img className='w-4 h-4' src='../static/images/plus-black.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto w-3/4 flex flex-col tracking-wide border border-black p-4 space-y-4'>
            <p className='text-2xl'>Hot Deals</p>
            <hr></hr>
            <div className='h-[25vh] max-w-[80vw] flex flex-row items-center'>
            <Carousel images={images} />
            </div>
        </div>
    </section>
  )
}

export default ProductDetails
