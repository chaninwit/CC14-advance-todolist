<<<<<<< HEAD

import AuthPhoto from '../assets/auth.png'
function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="flex-1 hidden lg:flex justify-items-center items-center">
        <div className='p-16'>
          <img src={AuthPhoto} alt='banner' className='w-full'/>
        </div>
      </div>
      {/* Rigth */}
      <div className=" flex-1 flex items-center justify-center">
        <div className="m-[100px] flex flex-col gap-8 w-[80%]">
          <h1 className="text-8xl font-bold mb-12">Login1111111</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="example@mail.com"
              className="p-6 text-4xl outline-none rounded-lg border-2"
            />
            <input
              type="password"
              placeholder="password"
              className="p-6 text-4xl outline-none rounded-lg border-2"
            />
            <button
              type="submit"
              className="mt-4 p-4 text-4xl bg-[#db4c3f] text-white rounded-lg
               hover:bg-red-600"
            >
              Login
            </button>
          </form>
          <div className="flex gap-4">
            <p className="text-2xl text-gray-600 hover:text-[#db4c3f] cursor-pointer font-bold">
              forgot password ?
            </p>
            <p className="text-2xl text-gray-600 ">
              Don't have an account ?{" "}
              <span className="hover:text-[#db4c3f] cursor-pointer font-bold">
                Go to sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
=======
import AuthPhoto from '../assets/auth.png'
function LoginPage() {
    return (
        <div className='h-screen flex bg-primary'>
          {/* Left */}
            <div className='flex-1 hidden lg:flex justify-center items-center'>
              <div className='p-16'>
                <img src={AuthPhoto} alt="banner" className='w-full'/>
              </div>
            </div>
            {/* Rigth */}
            <div className='flex-1 flex items-center justify-center'>
                <div className='m-[100px] flex flex-col gap-8 w-[80%]'>
                    <h1 className='text-8xl font-bold mb-12'>Login</h1>
                    <form className='flex flex-col gap-4'>
                        <input
                            type='email'
                            placeholder='example@mail.com'
                            className='p-6 text-4xl outline-none rounded-lg border-2'
                        />
                         <input
                            type='password'
                            placeholder='password'
                            className='p-6 text-4xl outline-none rounded-lg border-2'
                        />
                        <button type='submit' className='mt-4 p-4 py-6 text-4xl bg-[#db4c3f] text-white rounded-lg hover:bg-red-600'>Login</button>
                    </form>
                    <div className='flex gap-4'>
                        <p className='text-2xl text-gray-600 hover:text-[#db4c3f] cursor-pointer font-bold'>Forgot password ?</p>
                        <p className='text-2xl text-gray-600 '>
                            Don't have an account ? <span className='hover:text-[#db4c3f] cursor-pointer font-bold'>Go to sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> a2dbde25b22bb771f1c093b4327f2ec5effa789a
}

export default LoginPage;
