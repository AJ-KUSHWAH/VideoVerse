import React from 'react'

const VideoCard = ({ info }) => {
  
    const {snippet, statistics} = info;
    const { title, channelTitle, thumbnails} = snippet;


  return (
    <div className='w-72 p-2 m-2 shadow-lg conte'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
      <ul>
        <li>{title.slice(0,30)+"..."}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;

export const AdVideoCard = ({info}) => {
  return(
    <div className='bordar border-red-600'>
      <VideoCard info={info} />
    </div>
  )
};

