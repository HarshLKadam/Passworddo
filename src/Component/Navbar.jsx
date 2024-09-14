import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white  min-w-full'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
                <div className='logo font-bold text-2xl'>
                    <span className="text-orange-500"> &lt;</span>
                    Password
                    <span className="text-orange-500">Do/&gt;</span>

                </div>


                <div className='md:flex md:gap-3'>
                    <div className='mobiledevices block md:hidden  '>
                        <button className=' bg-orange-400   flex px-8  ml-[127px] h-10 rounded-full justify-center items-center  gap-2 mb-1 '>
                            <img src="icons/github-mark.png" className='invert-1 py-5 z-10 mx-auto mt-1' width={30} alt="github logo" />
                            <div className='text-black font-bold text-sm'> Github</div>
                        </button>
                        
                    </div>

                    <button className=' bg-orange-400 hidden md:block h:50 rounded-3xl py-4 px-2'>
                        <img src="icons/github-mark.png" className='invert-1 py-5 z-10 mx-auto mt-2' width={40} alt="github logo" />
                        <div className='text-black font-bold text-sm'> Github</div>
                    </button>

                    <button className=' bg-orange-400 hidden md:block h-50 rounded-3xl py-4 px-2 '>
                        <img src="icons/google.png" className='invert-1 py-5 z-10 mx-auto mt-2' width={40} alt="google logo" />
                        <div className='text-black font-bold text-sm'>Google</div>
                    </button>

                    <button className=' bg-orange-400 hidden md:block h-50 rounded-3xl py-4 px-2'>
                        <img src="icons/youtube.png" className='invert-1 py-5 z-10 mx-auto mt-2' width={40} alt="youtube logo" />
                        <div className='text-black font-bold text-sm'>Youtube</div>
                    </button>
                </div>

            </div>
        </nav>

    )

}

export default Navbar