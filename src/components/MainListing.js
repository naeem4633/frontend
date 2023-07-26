import React from 'react'
import Carousel from '../components/Carousel';

const MainListing = () => {
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
    <section className='w-full relative tracking-wide'>
        <div className='mx-auto w-5/6 flex flex-col space-y-6'>
            <img className='w-full h-[40vh] border border-black'></img>
            <div className='w-3/4 mx-auto grid grid-cols-5 gap-y-4'>
                <div className='w-full flex flex-col space-y-2 items-center justify-center p-3 hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img className='h-40 w-40 rounded-full bg-gray-200'></img>
                    <p className='text-3xl font-semibold'>Face</p>
                </div>
                <div className='w-full flex flex-col space-y-2 items-center justify-center p-3 hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img className='h-40 w-40 rounded-full bg-gray-200'></img>
                    <p className='text-3xl font-semibold'>Lips</p>
                </div>
                <div className='w-full flex flex-col space-y-2 items-center justify-center p-3 hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img className='h-40 w-40 rounded-full bg-gray-200'></img>
                    <p className='text-3xl font-semibold'>Nails</p>
                </div>
                <div className='w-full flex flex-col space-y-2 items-center justify-center p-3 hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img className='h-40 w-40 rounded-full bg-gray-200'></img>
                    <p className='text-3xl font-semibold'>Accessories</p>
                </div>
                <div className='w-full flex flex-col space-y-2 items-center justify-center p-3 hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img className='h-40 w-40 rounded-full bg-gray-200'></img>
                    <p className='text-3xl font-semibold'>Eyes</p>
                </div>
            </div>
            <img className='w-full h-[40vh] border border-black'></img>
            <div className='w-full h-[40vh] grid grid-cols-2 gap-6'>
                <img className='w-full h-full border border-black'></img>
                <img className='w-full h-full border border-black'></img>
            </div>
            <img className='w-full h-[40vh] border border-black'></img>
            <div className='flex flex-col space-y-12 pt-12'>
                <div className='w-full flex flex-col space-y-6'>
                    <p className='mx-auto text-3xl'>Top Brands</p>
                    <div className='mx-auto w-3/5 grid grid-cols-3 gap-y-6'>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                        <div className='h-44 w-64 flex flex-col pt-5 border border-gray justify-between rounded-md'>
                            <img className='mx-auto w-36 h-24'></img>
                            <div className='mx-auto w-full h-1/4 color-secondary'></div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col space-y-6'>
                    <p className='mx-auto text-3xl'>Best Sellers</p>
                    <Carousel images={images}/>
                </div>
                <div className='w-full flex flex-col space-y-6'>
                    <p className='mx-auto text-3xl'>New Arrivals</p>
                    <Carousel images={images}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainListing
