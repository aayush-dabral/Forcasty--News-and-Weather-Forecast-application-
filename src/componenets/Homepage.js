import React from 'react'
import './homepageStyle.css'
import newsImage from './news.jpg'
import weatherImage from './weather.jpg'
import { Link } from 'react-router-dom'

const Homepage = () => {

  return (
    <>
      <div className='homepage'>
        <div className='selection-window'>

          <div className="heading">
            <h1 className='text'>CHOOSE ONE</h1>
          </div>

          <div className='f-item'>
            <Link className='main' to='/news'>
              <div className="news-image-container">
                <img src={newsImage} alt="News" className="newsImage" style={{ float: 'left' }} />
                <div className='newsText'><h1 className='overlay'> NEWS </h1></div>
            </div>
            </Link>
            <Link className='main' to='/weather'>
              <div className='news-image-container'>
                <img src={weatherImage} alt="Weather" className='weatherImage' style={{ float: 'right' }} />
                <div className='weatherText'><h1 className='overlay'>WEATHER</h1></div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Homepage