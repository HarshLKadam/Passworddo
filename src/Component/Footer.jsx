import React from 'react'

const Footer = () => {
    return (

        <div className=' text-center bg-slate-800 text-white  md:text-2xl  m-0  outline-none  fixed bottom-0 w-full'>
            <div className='logo font-bold text-xl mt-1'>
                <span className="text-orange-500"> &lt;</span>
                Password
                <span className="text-orange-500">Do/&gt;</span>
            </div>
            <div className=' m-4 font-bold text-smmd:text-lg flex justify-center'>
                <span> Created&nbsp;with &nbsp;</span> &nbsp;<img src="/icons/wired-outline-20-love-heart-morph-slider.svg" className='w-[30px] mb-6 md:' alt="" />
                <span>&nbsp;By&nbsp; @Harsh Laxman Kadam </span> 
            </div>

           

        </div>
    )
}

export default Footer