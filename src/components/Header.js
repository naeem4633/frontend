import React from 'react'

const Header = () => {
  return (
    <section className='w-full relative top-0'>
        <div className='mx-auto w-5/6 flex flex-row justify-between py-2 tracking-wide'>
            <div className='w-3/5 flex flex-row justify-between'>
                <img className='w-44 border border-black'></img>
                <div className='flex flex-row items-center w-3/4'>
                    <input className='h-14 p-4 w-full border-2 border-red-300 text-gray-500 rounded tracking-wide' placeholder='Search for items...'></input>
                    <img src='../static/images/search.png' className='w-5 h-5 -translate-x-24'></img>
                </div>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <img src='../static/images/phone.png' className='w-10 h-10'></img>
                <div className='flex flex-col'>
                    <p className='text-xl text-red-600 tracking-normal'>+76 583 1110327</p>
                    <p className='text-sm text-gray-500 tracking-wide'>Support Hours 09:00 - 20:00</p>
                </div>
            </div>
        </div>
        <div className='w-full border border-gray-200'>
            <div className='mx-auto w-5/6 flex flex-row justify-between py-3'>
                <div className='flex flex-row space-x-10 items-center'>
                    <div className='h-12 w-44 flex flex-row color-secondary rounded items-center justify-evenly p-2 hover:bg-[#96205d] transition-all duration-200  cursor-pointer'>
                        <img src='../static/images/menu.png' className='w-5 h-5'></img>
                        <p className='text-white'>Top Brands</p>
                        <img src='../static/images/down-arrow-white.png' className='w-5 h-5'></img>
                    </div>
                    <ul className='flex flex-row space-x-6'>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Makeup</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Fashion</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Skin Care</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Hair Care</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Fragrance</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Lingerie</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                        <li className='flex flex-row items-center space-x-2'>
                            <p>Watches</p>
                            <img src='../static/images/down-arrow.png' className='w-2 h-2'></img>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row space-x-10 items-center tracking-wide text-base'>
                    <ul className='flex flex-row space-x-6'>
                        <li className='flex flex-row items-center space-x-1'>
                            <img src='../static/images/love.png' className='w-7 h-7'></img>
                            <p className='text-gray-500'>Wishlist</p>
                        </li>
                        <li className='flex flex-row items-center space-x-1'>
                            <img src='../static/images/bag.png' className='w-7 h-7'></img>
                            <p className='text-gray-500'>Cart</p>
                        </li>
                        <li className='flex flex-row items-center space-x-1'>
                            <img src='../static/images/user.png' className='w-7 h-7'></img>
                            <p className='text-gray-500'>Account</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header