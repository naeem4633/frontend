import React from 'react'

const Listing = () => {
  return (
    <section className='w-full relative tracking-wide'>
        <div className='mx-auto w-5/6 flex flex-col space-y-6'>
            <img className='w-full h-[25vh] border border-black'></img>
            <div className='flex flex-row'>
                <div className='w-1/5 flex flex-col space-y-8'>
                    <div className='w-full flex flex-col border border-gray-300 px-4 py-6 rounded-lg space-y-6'>
                        <p className='text-2xl'>Filter by Price</p>
                        <hr></hr>
                        <div className='border border-gray-300 p-3 rounded-md flex flex-row items-center justify-between'>
                            <p>Select Price</p>
                            <img className='w-4 h-4' src='../static/images/down-arrow.png'></img>
                        </div>
                    </div>
                    <div className='w-full flex flex-col border border-gray-300 px-4 py-6 rounded-lg space-y-6'>
                        <p className='text-2xl'>Brands</p>
                        <hr></hr>
                        <ul className='flex flex-col space-y-3'>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                            <li className='rounded-md p-3 border border-gray-200'>Polo Ralph Lauren</li>
                        </ul>
                    </div>
                </div>
                <div className='w-4/5 flex flex-col p-4 space-y-8'>
                    <div className='ml-5 right-0 w-40 border border-gray-300 p-2 rounded-md flex flex-row items-center justify-between hover:drop-shadow-lg'>
                        <img className='w-4 h-4' src='../static/images/sort.png'></img>
                        <p className='text-sm'>Sort By: None</p>
                        <img className='w-4 h-4' src='../static/images/down-arrow.png'></img>
                    </div>
                    <div className='p-2 grid grid-cols-4 gap-14'>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img src='' className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                        <div className=' flex flex-col p-3 space-y-2'>
                            <img className='w-full h-52'></img>
                            <p className='text-sm'>Product Name</p>
                            <p className='text-sm font-semibold'>$ 44.55</p>
                            <div className='flex flex-row w-full color-secondary justify-center space-x-2 items-center p-3 hover:bg-[#96205d] transition-all duration-200 cursor-pointer'>
                                <img className='w-5 h-5' src='../static/images/cart.png'></img>
                                <p className='text-white text-sm font-semibold'>Add to Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Listing
