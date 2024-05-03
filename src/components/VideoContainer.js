import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import ButtonList from './ButtonList'
import { YOUTUBE_API_URL } from '../utilities/Constants'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

useEffect(() => {
  getVideos();
}, []);

const getVideos = async () => {
  try {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};

  return (
    <div className=''>
      <ButtonList />
      <div className='flex flex-wrap p-2 m-2'>
      { videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video)=> <Link key={video.id} to={"watch?v=" + video.id}> <VideoCard  info={video} /> </Link>)}
      </div>
    </div>
  )
}

export default VideoContainer;