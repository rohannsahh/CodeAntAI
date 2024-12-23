import { useState } from 'react';
import  Logo  from '../../assets/logo.svg';
import azureLogo from '../../assets/azure.png';
import { useNavigate } from 'react-router-dom';


const SignUpSAASMethod=()=>{
   const navigate = useNavigate();

  return (
    <div className='w-full my-3 border-t pt-8'>
    <div className=" space-y-3 text-xs tracking-wide font-semibold">
    <div className='flex justify-center'>
       <button type='button' className="w-3/4  flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100">
       <img className="w-5 h-5 mr-3" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" 
       onClick={()=>{navigate('/dashboard')}}/>
       Sign in with GitHub
     </button>
     </div>
     <div className='flex justify-center'>
      <button type='button' className="w-3/4 flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100"
      onClick={()=>{navigate('/dashboard')}}>
       <img className="w-5 h-5 mr-3" src="https://cdn-icons-png.flaticon.com/512/6125/6125001.png" alt="Bitbucket" />
       Sign in with Bitbucket
     </button>
      </div>
     <div className='flex justify-center'>
      <button type='button' className="w-3/4 flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100"
      onClick={()=>{navigate('/dashboard')}}>
       <img className="w-5 h-5 mr-3" src={azureLogo} alt="Azure DevOps" />
       Sign in with Azure DevOps
     </button>
      </div>
      <div className='flex justify-center'>

       <button type='button' className="w-3/4 flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100"
       onClick={()=>{navigate('/dashboard')}}>
       <img className="w-5 h-5 mr-3" src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt="GitLab" />
       Sign in with GitLab
     </button>  
      </div>
    
   </div>
   
    </div>
  )
}


const SignUpSelfHostedMethod=()=>{
  const navigate = useNavigate();
   
  return(
  <div className='w-full my-3 border-t pt-8'>
  <div className=" space-y-3 text-xs tracking-wide font-semibold">
  
    <div className='flex justify-center'>

     <button type='button' className="w-3/4 flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100"
     onClick={()=>{navigate('/dashboard')}}>
     <img className="w-5 h-5 mr-3" src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt="GitLab" />
     Sign in with GitLab
   </button>  
    </div>
  
    <div className='flex justify-center'>

<button type='button' className="w-3/4 flex items-center justify-center px-4 py-2 border rounded-lg  text-gray-700 hover:bg-gray-100"
onClick={()=>{navigate('/dashboard')}}>
<img className="w-5 h-5 mr-3" src="https://cdn-icons-png.flaticon.com/512/206/206437.png" alt="sso" />
Sign in with SSO
</button>  
</div>

 </div>
 
  </div>
)

}
 const LoginCard = () => {

  const [activeButton , setActiveButton] = useState('SAAS')
  return (
    <div className='flex flex-col w-full max-w-[536px]'>
       <div className=" bg-white font-inter rounded-lg border shadow p-6 pl-0 pr-0">
          <div className="text-center mb-4">
            <div className='flex justify-center  text-center'>
                <img src={Logo} alt='logo' className='w-6 h-6 mx-2'/>
                <h1 className='text-xl text-gray-700 font-light'>CodeAnt AI</h1>
                </div>
            <h2 className="text-2xl mt-6 font-semibold">Welcome to CodeAnt AI</h2>
            <div className="flex  justify-center mt-5 space-x-2 px-5">
              <button className={`px-4 py-2 w-1/2 rounded-lg  focus:outline-none focus:ring transition duration-100 ease-in-out ${activeButton === 'SAAS' ? 'bg-blue-600 text-white focus:ring-blue-200' : 'bg-gray-100 text-gray-700 focus:ring-gray-300'}`}

              onClick={()=>{setActiveButton('SAAS')}}>SAAS</button>

              <button  className={`px-4 py-2 w-1/2 rounded-lg focus:outline-none  focus:ring transition duration-100 ease-in-out ${activeButton === 'Self Hosted' ? 'bg-blue-600 text-white focus:ring-blue-200' : 'bg-gray-100 text-gray-700 focus:ring-gray-300'}`}
               onClick={()=>{setActiveButton('Self Hosted')}}>Self Hosted</button>
            </div>
          </div>
          <div className='w-full my-8 '>
            {activeButton==='SAAS'?<SignUpSAASMethod/>: <SignUpSelfHostedMethod/>}  
             
           </div>
       
 
   
          
        </div>
        <div>
            <p className="text-center text-sm  text-gray-700 mt-4">
                 By signing up you agree to the <a href="/" className="text-black font-semibold ">Privacy Policy</a>.
              </p>
         </div>
    </div>
  )
}

export default LoginCard
