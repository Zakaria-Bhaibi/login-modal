import loginbg from './assets/loginbg.jpg'
import facebooklogo from './assets/facebook.png'
import googlelogo from './assets/google.png'
import './App.css'

function App() {
  

  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-platinium1">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* Left Side */}
          <div className="p-6 md:p-20">
            {/* Top content */}
              <h2 className="font-mono mb-5 text-4xl font-bold">Log IN</h2>
              <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                Log in to your account to upload or download pictures,videos or music.
              </p>
              <input type="text" placeholder='Enter your Email adress' className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />
              {/* Middle Content */}
              <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div className="font-thin text-cyan-700">Forgot passowrd ?</div>
                <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                  <span>Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg> 
                 </button>
              </div>
              {/* Border */}
              <div className="mt-12 border-b border-b-gray-300"></div>
              {/* Bottom Content */}
              <p className="py-6 text-sm font-thin text-center text-gray-400">or log in with</p>
              {/* Bottom Buttons Container */}
              <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                 <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 '>
                    <img src={facebooklogo} alt="" className='w-9' />
                  <span className="font-thin">Facebook</span>
                 </button>
                 <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 '>
                    <img src={googlelogo} alt="" className='w-9' />
                  <span className="font-thin">Google</span>
                 </button>
              </div>
              
          </div>
          {/* Right Side */}
            <img src={loginbg} alt="" className='w-[430px] hidden md:block' />
          {/* Close button */}
          <div className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default App
