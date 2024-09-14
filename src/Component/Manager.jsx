import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const ref = useRef()
    const passwordref = useRef();
    const [form, setform] = useState(
        {
            site: "",
            username: "",
            password: ""
        }
    );

    const [PasswordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    //this is using for toggle eye svg in show and hide 
    const showpassword = () => {
        console.log(ref.current.src);
        if (ref.current.src.includes("icons/view-off-slash-stroke-rounded.svg")) {
            ref.current.src = "icons/view-stroke-rounded.svg"
            passwordref.current.type = "text"
        }
        else {
            ref.current.src = "icons/view-off-slash-stroke-rounded.svg"
            passwordref.current.type = "password"
        }
    }

    //this is using for the saving the password in the local storage 
    const savepassword = () => {
        if(form.site.length>=2 && form.username.length >=2 && form.password.length>=2){
            setPasswordArray([...PasswordArray, {...form , id:uuidv4()}])  
            localStorage.setItem("passwords", JSON.stringify([...PasswordArray, {...form , id:uuidv4()}]))
            console.log([...PasswordArray, form])
            setform({site:"",
                username:"",
                password:"",
            })
            toast('Password saved succesfully !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        
        }
        else{
            toast('Error password not svaed !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        }
      
    }

    const deletepassword = (id) => {
        console.log("Deleting password with id", id)
        let c= confirm("Do you really want to delete this password ?")
        if (c){
            setPasswordArray(PasswordArray.filter(item=>item.id!==id ))
            localStorage.setItem("passwords",JSON.stringify(PasswordArray.filter(item=>item.id!==id ))) 
            toast('Password Deleted succesfully !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            
            });
        }
    }

    const editpassword=(id)=>{
        console.log("Editing password with id ", id)
        setform(PasswordArray.filter(item=>item.id===id)[0])
        setPasswordArray(PasswordArray.filter(item=>item.id!==id ))
    }

    const handelchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const copytext = (text) => {
        toast('Copied to clipboard !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          
        });
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                
            />
            {/* Same as */}
            <ToastContainer />

            {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}

                <div className="  text-white md:mycontainer mx-auto p-2 pt-3 md:px-0 min-h-[88.2vh] bg-slate-900 mt-[40px] md:mt-[10px]">
                    <div className='logo text-4xl font-bold '>
                        <span className='text-orange-500'>&lt;</span>
                        Password
                        <span className='text-orange-500'>DO/&gt;</span>
                        </div>
                    <div className='my-3 mx-4'>
                        Your own
                        <span className='text-orange-300 text-lg font-bold'> Passwords </span>
                        manager
                    </div>

                    <div className="text-white  flex flex-col p-4 gap-4 ">

                        {/* value ={form.site } here this value  attribute binds value of the input field with state named as form   */}
                        <input value={form.site} onChange={handelchange} name="site" className="rounded-full border border-orange-600 w-full text-black py-2 px-4" type="text" id="site" placeholder='Enter website URL' />


                        <div className="flex flex-col md:flex md:flex-row justify-between gap-4">
                            <input value={form.username} onChange={handelchange} name="username" type="text" id="username" placeholder='Enter Username' className="rounded-full border border-orange-600 w-full p-2 px-4 text-black" />

                            <div className='relative flex'>
                                <input ref={passwordref} value={form.password} onChange={handelchange} name="password" type="password" id="password" placeholder='Enter Password' className="rounded-full border border-orange-600 w-full p-2 px-4 pr-12 text-black" />
                                <span className="absolute right-4  top-2 text-black cursor-pointer" onClick={showpassword}>
                                    <img ref={ref} src="icons/view-off-slash-stroke-rounded.svg" alt="" />
                                </span>
                            </div>
                        </div>

                    </div>
                    <button onClick={savepassword} className='flex justify-center items-center gap-4 border-2 border-black p-2 px-4 rounded-full bg-orange-400 mx-auto my-4 font-bold w-fit hover:bg-orange-600'>
                        <lord-icon
                            src="https://cdn.lordicon.com/zrkkrrpl.json"
                            trigger="hover"
                            state="hover-swirl"
                            colors="primary:#430c69,secondary:#210b46">
                        </lord-icon>
                        Save Passwords </button>

                    <div className="passwords pb-[150px]">
                        <h2 className='text-white font-bold text-xl m-4'>Your Passwords </h2>
                        {PasswordArray.length === 0 && <div className='text-white text-center text-2xl'> No Passwords to show </div>}
                        {PasswordArray.length != 0 &&
                            <table className="table-auto w-full text-white  overflow-hidden rounded-xl py-2">
                                <thead className='bg-orange-500'>
                                    <tr>
                                        <th className='py-2'>Sites</th>
                                        <th className='py-2'>Usernames</th>
                                        <th className='py-2'>Passwords</th>
                                        <th className='py-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PasswordArray.map((item, index) => {
                                        if (item && item.site && item.username && item.password) {
                                            return (
                                                <tr key={index}>

                                                    <td className='text-center  py-2  border border-white'>
                                                        <div className='flex justify-around items-center'>
                                                            <span><a href={item.site} target='_blank'>{item.site}</a></span>
                                                            {/* <div onClick={() => copytext(item.site)} className='lordiconcopy cursor-pointer ml-4 mr-1' >
                                                                <button>
                                                                    <img className='' src="/icons/copy.svg" alt="" />
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                    </td>

                                                    <td className='text-center  py-2 border border-white'>
                                                        <div className='flex justify-around items-center'>
                                                            <span><a href={item.username} target='_blank'>{item.username}</a></span>
                                                            {/* <div onClick={() => copytext(item.username)} className='lordiconcopy cursor-pointer ml-4 mr-1' >
                                                                <button>
                                                                    <img className='' src="/icons/copy.svg" alt="" />
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                    </td>

                                                    <td className='text-center  py-2 border border-white'>
                                                        <div className='flex justify-around items-center'>
                                                            <span><a href={item.password} target='_blank'>{item.password}</a></span>
                                                            {/* <div onClick={() => copytext(item.password)} className='lordiconcopy cursor-pointer ml-4 mr-1'>
                                                                <button>
                                                                    <img className='' width={20} src="/icons/copy.svg" alt="" />
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                    </td>
                                                    <td className='text-white py-2 border border-white text-center'>
                                                       <span className='editbutton cursor-pointer mx-4' onClick={()=>{editpassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/oqaajvyl.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            colors="primary:#ffffff,secondary:#ffffff">
                                                        </lord-icon>
                                                        </span>
                                                        <span className=' deletebutton cursor-pointer'  onClick={()=>{deletepassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            colors="primary:#ffffff">
                                                        </lord-icon>
                                                        </span>
                                                        <span onClick={() => copytext(item.password)} className='lordiconcopy cursor-pointer ml-4 mr-1' >
                                                                <button>
                                                                    <img className='' src="/icons/copy.svg" alt="" />
                                                                </button>
                                                            </span> 
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>

                </div>

            {/* </div> */}
        </>
    )
}

export default Manager;