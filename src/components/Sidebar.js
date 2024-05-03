import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-60 shadow-md p-2 '>
    
      <ul className='px-4 m-2 border-b-2' > 
        <Link to="/"><li className='p-1 '>Home</li></Link>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
      </ul>

      <h1 className=' text-md font-bold px-5 mx-2'>You</h1>
      <ul className='px-4 m-2 border-b-2'>
        <li className='p-1 '>Liked Videos</li>
        <li className='p-1 '>Watched</li>
        <li className='p-1 '>History</li>
        <li className='p-1 '>Downloads</li>
      </ul>
      <h1 className=' text-md font-bold px-5 mx-2'>Subscriptions</h1>
      <ul className='px-4 m-2 border-b-2'>
        <li className='p-1 '>ajay</li>
        <li className='p-1 '>NR</li>
        <li className='p-1 '>Shark Tank</li>
        <li className='p-1 '>Fittness</li>
      </ul>
      <h1 className=' text-md font-bold px-5 mx-2'>Explore</h1>
      <ul className='px-4 m-2 border-b-2'>
        <li className='p-1 '>Trending</li>
        <li className='p-1 '>Music</li>
        <li className='p-1 '>Sports</li>
        <li className='p-1 '>Films</li>
      </ul>
    </div>
  )
}

export default Sidebar