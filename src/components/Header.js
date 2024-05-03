import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utilities/appSlice';
import { YOUTUBE_SEARCH_API } from '../utilities/Constants';
import { cacheResults } from '../utilities/searchSlice';


const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await  data.json();
    // console.log(json);
    setSuggestions(json[1]);

    console.log(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }; 


  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img onClick={() => handleToggleMenu()} className='h-8' alt='menu' src='https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png' ></img>
            <img className='h-8 ml-4'  alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png'></img>
        </div>
        <div className='col-span-3 w-full'>
            <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)} className='w-10/12 rounded-l-full border border-gray-600' ></input>
            <button className='rounded-r-full border border-gray-600'>search</button>

            {showSuggestions && ( 
              <div className='fixed bg-white py-2 px-5 w-[39rem]'>
                <ul>
                  {suggestions.map((s) => <li key={s}>{s}</li> )} 
                </ul>
              </div>) }

        </div>

        <div className='ml-56'>
            <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'></img>
        </div>
    </div>
    
  )
}

export default Header;