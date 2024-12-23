import LoginCard from './LoginCard'
import subtract from '../../assets/Subtract.svg'
import Logo from '../../assets/logo.svg'
import vector from '../../assets/Vector.svg'
import arrow from '../../assets/up-arrow.png'


const StatsCard = () => {
  return (
    <div className="absolute top-[28%] left-[9%] font-inter">
      <div className="relative border bg-white  shadow-[0_0_20px_rgba(0,0,0,0.2)]  rounded-[20px]  ">
        <div className="p-4 border-b border-gray-200 ">
          <div className="flex items-center space-x-3">
            <div className=" rounded-full flex items-center justify-center">
              <img src={Logo} alt="Icon" className="w-7" />
            </div>
           <div>
              <h1 className="text-lg font-bold text-gray-800">AI to Detect & Autofix Bad Code</h1>
            </div> 
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 py-5">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">30+</p>
            <p className="text-gray-600 text-sm">Language Support</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">10K+</p>
            <p className="text-gray-600 text-sm">Developers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">100K+</p>
            <p className="text-gray-600 text-sm">Hours Saved</p>
          </div>
        </div>

        <div className="absolute bottom-[-84%] left-[77%] transform -translate-x-1/2 bg-white border shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-[20px] p-3  w-56">
          <div className='mx-3'>
          <div className="flex items-center justify-between ">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <img src={vector} alt="Circle Icon" className="w-5 h-5 " />
            </div>
           <div className='flex flex-col '>
             <div className="text-blue-500 text-xs  flex ">
             <img src={arrow} alt='' className='w-2 h-3'/><span className="text-blue-700 font-bold mx-1"> 14%</span> 
               
            </div>
              <div><span className='text-black text-xs'>This week</span></div>
            </div>
          </div>
          <div className="mt-3 ">
            <p className="text-sm font-semibold text-gray-900">Issues Fixed</p>
            <p className="text-4xl font-bold text-gray-900">500K+</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    <div className="bg-white flex-1 hidden lg:block">
      <div>
        <StatsCard />
      </div>
      <div>
        <img src={subtract} alt="design" className="p-1 m-1 w-56 absolute left-0 bottom-0" />
      </div>
    </div>

    <div className="flex-1 bg-gray-100 border flex items-center justify-center p-3">
      <LoginCard />
    </div>
  </div>
      
    
    
    
  )
}

export default Login;
