

const Login = () => {
  return (
    <>

    <div className="bg-gradient-to-r from-sky-500 to-indigo-500  w-full h-screen flex justify-center items-center flex-col">
        <h1 className='bg-transparent text-yellow-100 text-3xl font-mono uppercase font-extrabold mb-4 shadow-slate-950 text-shadow'>e-commerce</h1>
        <div className="w-3/12 h-80 bg-transparent flex flex-col justify-evenly items-center shadow-lg shadow-slate-900 rounded-xl p-6">
        <p className='text-teal-200 font-extrabold text-3xl mb-3'>Sign-in</p>

        <div className=' w-full h-20 flex flex-col '>
        <label htmlFor="email" className='capitalize mb-2 font-extrabold'>Enter email</label>
        <input type="text" id='email' className='inputs' />
        </div>

        <div className=' w-full h-20 flex flex-col '>
        <label htmlFor="password" className='capitalize mb-2 font-extrabold ' >Enter password</label>
        <input type="text" id='password' className='inputs'/>
        </div>
        <button className='bg-blue-600 w-4/6 h-10 rounded-lg font-extrabold hover:bg-blue-900'>Login</button>
        </div>
    </div>

    </>
  )
}

export default Login