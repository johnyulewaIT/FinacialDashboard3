import React from 'react';
import Navbar from './componets/navbar/Navbar';
import Sidebar from './componets/sidebar/Sidebar';
import Main from './componets/main/Main';
const App = () => {
  return (
    <div className='flex bg-dark h-screen text-white'>
      <div className='w-[10%] lg:w-[5%]'>
        <Sidebar/>
      </div>
      <div className='flex flex-col w-full lg:w-[95%]'>
        <div><Navbar/></div>
      <div className='overflow-auto'>
        <Main/>
      </div>
      </div>
    </div>
  );
}

export default App;
