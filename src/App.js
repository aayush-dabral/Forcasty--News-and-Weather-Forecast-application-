import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './componenets/Homepage'
import Navbar from './componenets/Navbar'
import News from './componenets/NewsComponents/News'
import Weather from './componenets/WeatherComponents/Weather'
import './AppStyle.css'

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div className='primary'>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} className='homepage-router'/>
          
          <Route exact path="/news" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='general' country='in' category='general'/></div>} />
          <Route exact path="/news/business" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='business' country='in' category='business'/></div>} />
          <Route exact path="/news/entertainment" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='entertainment' country='in' category='entertainment'/></div>} />
          <Route exact path="/news/health" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='health' country='in' category='health'/></div>} />
          <Route exact path="/news/science" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='science' country='in' category='science'/></div>} />
          <Route exact path="/news/sports" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='sports' country='in' category='sports'/></div>} />
          <Route exact path="/news/technology" element={<div className='primary-news'><Navbar /><News apiKey={apiKey} key='technology' country='in' category='technology'/></div>} />

          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
