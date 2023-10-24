import React from 'react'
import { Link } from 'react-router-dom'


function Youtube() {
  return (

    <>
      <div className='youtube'>
        <div className='youtube-1'>
          <button>Explore All Watches</button>
        </div>
        <div className='youtube-2'>
          <Link className='link' to="/YoutubeHome"><h3> Home</h3></Link>
          <Link className='link' to='/YoutubeVideos'> <h3>Videos</h3></Link>
          <Link className='link' to='/YoutubeAbout'><h3>About</h3></Link>
        </div>
      </div>
    </>
  )
}

export default Youtube