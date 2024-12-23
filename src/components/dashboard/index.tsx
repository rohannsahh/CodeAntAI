
import { useState } from 'react';
import {  RefreshCw, Plus,  Settings, Phone, LogOut, Menu, X, BookText, ChevronDown, Database } from 'lucide-react';
import Logo from '../../assets/logo.svg';
import cloud from '../../assets/cloud.svg';
import code from '../../assets/code.svg';


interface Repository {
  name: string;
  visibility: "Public" | "Private";
  language: string;
  size: string;
  updatedAt: string;
}

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isActive, setIsActive] = useState(false);
const [selectedOption, setSelectedOption] = useState('UtkarshDhairyaPan...');

const options = ['UtkarshDhairyaPanwar', 'Rohan kumar', 'Rahul Singh'];

  const handleClick = () => {
    setIsActive(!isActive);
  };

interface OptionClickHandler {
    (option: string): void;
}

const handleOptionClick: OptionClickHandler = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
};

  const repositories: Repository[] = [
    { name: "design-system", visibility: "Public", language: "React", size: "7320 KB", updatedAt: "1 day ago" },
    { name: "codeant-ci-app", visibility: "Private", language: "Javascript", size: "5871 KB", updatedAt: "2 days ago" },
    { name: "analytics-dashboard", visibility: "Private", language: "Python", size: "4521 KB", updatedAt: "5 days ago" },
    { name: "mobile-app", visibility: "Public", language: "Swift", size: "3096 KB", updatedAt: "3 days ago" },
    { name: "e-commerce-platform", visibility: "Private", language: "Java", size: "6210 KB", updatedAt: "6 days ago" },
    { name: "blog-website", visibility: "Public", language: "HTML/CSS", size: "1876 KB", updatedAt: "4 days ago" },
    { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updatedAt: "7 days ago" },
    { name: "e-commerce-platform", visibility: "Private", language: "Java", size: "6210 KB", updatedAt: "6 days ago" },
    { name: "blog-website", visibility: "Public", language: "HTML/CSS", size: "1876 KB", updatedAt: "4 days ago" },
    { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updatedAt: "7 days ago" },
  ];

  const NavigationItems = () => (
    <div className="flex flex-col h-full text-gray-700 font-semibold text-sm  ">
         
      <div className="space-y-1 pb-4">


        <div className="relative"> 
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between px-3 py-2 font-normal text-sm border-2 rounded-md bg-white hover:bg-gray-50"
      >
        <span className="truncate">{selectedOption}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isDropdownOpen && (
        <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-50">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                selectedOption === option ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
        </div>
    <div>
    <button
      onClick={handleClick}
      className={`w-full px-3 py-2 text-left rounded-lg flex items-center gap-2 ${
        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
      }`}
    ><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9453 8.07275C20.2969 8.38916 20.332 8.9165 20.0508 9.26807C19.7344 9.61963 19.207 9.65479 18.8555 9.37354L18.0117 8.63525V15.1743C18.0117 16.7563 16.7461 17.9868 15.1992 17.9868H5.07422C3.49219 17.9868 2.26172 16.7563 2.26172 15.1743V8.63525L1.38281 9.37354C1.03125 9.65479 0.503906 9.61963 0.1875 9.26807C-0.09375 8.9165 -0.0585938 8.38916 0.292969 8.07275L9.57422 0.197754C9.89062 -0.0483398 10.3477 -0.0483398 10.6641 0.197754L19.9453 8.07275ZM5.07422 16.2993H6.76172V10.9556C6.76172 10.1821 7.35938 9.54932 8.16797 9.54932H12.1055C12.8789 9.54932 13.5117 10.1821 13.5117 10.9556V16.2993H15.1992C15.7969 16.2993 16.3242 15.8071 16.3242 15.1743V7.19385L10.1367 1.95557L3.94922 7.19385V15.1743C3.94922 15.8071 4.44141 16.2993 5.07422 16.2993ZM8.44922 16.2993H11.8242V11.2368H8.44922V16.2993Z" fill={isActive?"white":"#414651"}/>
    </svg>
    
      Repositories
    </button>
      <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2" onClick={handleClick}>
        <img src={code} alt='' className="w-5 h-5 mr-1" />
        AI Code Review
      </button>
      <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2">
        <img src={cloud} alt='' className="w-5 h-5 mr-1" />
        Cloud Security
      </button>
      <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2">
        <BookText className="w-5 h-5 mr-1" />
        How to Use
      </button>
      <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2">
        <Settings className="w-5 h-5 mr-1 " />
        Settings
      </button>
      </div>
      <div className="pt-4 mt-auto ">
        <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Support
        </button>
        <button className="w-full px-3 py-2 text-left my-1 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen  bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-56 bg-white">
        <div className="p-4 ">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6  m-1 rounded-lg flex items-center justify-center">
              <img src={Logo} className=" text-white" alt='CodeAntAI' />
            </div>
            <h1 className=" text-xl">CodeAnt AI</h1>
          </div>
        </div>
        <nav className="p-4 py-2 flex flex-col h-[calc(100vh-73px)]">
          <NavigationItems />
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
            <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40 md:hidden" />

        <div className="fixed inset-0 bg-white h-fit  z-50 md:hidden">
        <div className="p-4 border-b flex justify-between  items-center">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <img src={Logo} className=" text-white" alt='CodeAntAI' />
              </div>
              <h1 className=" text-2xl">CodeAnt AI</h1>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2  ">
            <NavigationItems />
          </nav>
        </div>
        </>
      )}

      {/* Main content */}
      <div className="flex-1  overflow-auto border">
        {/* Mobile Header */}
        <div className="md:hidden p-4 bg-white border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
            <img src={Logo} className=" text-white" alt='CodeAntAI' />
            </div>
            <h1 className=" text-2xl">CodeAnt AI</h1>
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="p-0 sm:p-4 md:p-8 ">
        <div className='sm:border  bg-white rounded-xl'>
            <div className='p-5 pb-0 '>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
            <h2 className="text-2xl flex flex-col font-semibold">
              Repositories
              <span className="text-sm text-gray-600 font-normal my-1">{repositories.length} total repositories</span>
            </h2>
            <div className="flex gap-2">
              <button className="flex-1 md:flex-none px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh All
              </button>
              <button className="flex-1 md:flex-none px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Repository
              </button>
            </div>
          </div>

          <div className="mb-5 flex ">
  <div className="relative w-full md:max-w-md">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      </svg>
    </div>
    <input
      type="search"
      placeholder="Search Repositories"
      className="w-full pl-10 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
</div>

          </div>
          <div className="space-y-0 ">
            <div className=''>
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-gray-100 bg-white  border-t hover:shadow-sm transition-shadow"
              >
                <div className=' w-full mx-2'>
                <div className="flex items-start md:items-center  gap-4">
                  <div>
                    <div className='flex items-center'>
                    <h3 className="font-medium text-lg">{repo.name}</h3>
                          <div className='mx-2'> <span className="px-2 py-0 text-xs rounded-full border border-blue-200
                    
                       bg-blue-50 text-[#175CD3]
                     
                    ">
                        
                    {repo.visibility}
                  </span>
                  </div>
                  </div>
                    <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 mt-1 text-sm text-gray-700">
                      <div className='flex items-end'><span>{repo.language}</span>  <span className="w-2 h-2 m-1 mx-2  bg-blue-500 rounded-full"></span></div>

                      <span className='flex items-center'><Database className='h-5 w-3 m-1'/>{repo.size}</span>
                      <span className="text-sm text-gray-700">
                    Updated {repo.updatedAt}
                  </span>
                     
                    </div>
                  </div>
                </div>
              
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}