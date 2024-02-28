import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import AllUser from 'pages/AllUser/AllUser'
import SideBar from 'components/sideBar/SideBar'
export default function Dashboard() {
  return (
    <div>
        <div className='flex w-full h-full p-0 m-0'>
        <div className='w-[270px] h-full'>
        <SideBar />
        </div>
        <div className='w-full'>
        <Navbar />
        <AllUser />
        </div>
        </div>
      
      
      
    </div>
  )
}
