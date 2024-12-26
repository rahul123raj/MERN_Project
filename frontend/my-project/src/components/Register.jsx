

const Register = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500  w-full h-screen flex justify-center items-center flex-col">
        <h1 className='bg-transparent text-yellow-100 text-3xl font-mono uppercase font-extrabold mb-4 shadow-slate-950 text-shadow'>e-commerce</h1>
        <div className="w-9/12 h-[500px] bg-transparent grid grid-cols-3 gap-3 justify-evenly items-center shadow-lg shadow-slate-900 rounded-xl p-6">
        <p className='text-teal-200 font-extrabold text-3xl mb-3 col-span-3'>Register Here</p>

        {/* <div > */}
            <div className='  h-20 flex flex-col '>
                <label htmlFor="first" className='capitalize mb-2 font-extrabold'>First Name</label>
                <input type="text" id='first' className='inputs' />
            </div>
        
            <div className='  h-20 flex flex-col '>
                <label htmlFor="middle" className='capitalize mb-2 font-extrabold'>Middle Name</label>
                <input type="text" id='middle' className='inputs' />
            </div>

            <div className='  h-20 flex flex-col '>
                <label htmlFor="last" className='capitalize mb-2 font-extrabold'>last Name</label>
                <input type="text" id='last' className='inputs' />
            </div>
        {/* </div> */}

            <div className='  h-20 flex flex-col col-span-2 w-4/6 '>
                <label htmlFor="email" className='capitalize mb-2 font-extrabold'>Email</label>
                <input type="text" id='email' className='inputs' />
            </div>

            <div className='  h-20 flex flex-col '>
                <label htmlFor="mobileno" className='capitalize mb-2 font-extrabold'>Mobile No.</label>
                <input type="text" id="mobileno" className='inputs' />
            </div>

            <div className='  h-20 flex flex-col '>
                <label htmlFor="password" className='capitalize mb-2 font-extrabold'>Create Password</label>
                <input type="password"  id='password' className='inputs' />
            </div>

            <div className='  h-20 flex flex-col '>
                <label htmlFor="repassword" className='capitalize mb-2 font-extrabold'>Re-Enter Password</label>
                <input type="password"  id='repassword' className='inputs' />
            </div>

            <div className='  h-20 flex flex-col '>
                <label htmlFor="dob" className='capitalize mb-2 font-extrabold'>Date of Birth</label>
                <input type="date" id='dob' className='inputs' />
            </div>
            
            <div className=' flex flex-col  col-span-3 w-3/6 '>
                <label className='capitalize mb-2 font-extrabold'>Select Gender</label>

                <div className="flex  justify-between items-center">
                <div className=" w-1/5 flex justify-evenly items-center">    
                <label htmlFor="male" className="capitalize mb-2 font-extrabold">Male</label>
                <input type="radio" id='male' name="gender" value="male"  className='inputs' />
                </div>
                
                <div className=" w-1/5 flex justify-evenly items-center">
                <label htmlFor="female" className="capitalize mb-2 font-extrabold" >Female</label>
                <input type="radio" id='female' name="gender" value="female"  className='inputs' />
                </div>

                <div className=" w-1/5 flex justify-evenly items-center">
                <label htmlFor="ohers" className="capitalize mb-2 font-extrabold">Others</label>
                <input type="radio" id='ohers' name="gender" value="ohers"  className='inputs' />
                </div>

                </div>
            </div>
            <div className="w-full flex justify-center col-span-3">
                <button className='bg-blue-600 w-3/6 h-10 rounded-lg font-extrabold hover:bg-blue-900 col-span-2'>Register</button>
            </div> 


        </div>
    </div>
    </>
  )
}

export default Register