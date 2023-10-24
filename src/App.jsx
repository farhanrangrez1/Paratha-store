import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import YoutubeVideos from './youtube/YoutubeVideos'
import YoutubeAbout from './youtube/YoutubeAbout'
import YutubeHome from './youtube/YutubeHome'
import Aboute from './apge/Aboute'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Hero from './component/Hero'
import Youtube from './component/Youtube'
import Home from './apge/Home'
import Footer from './component/Footer'
import Ragister from './apge/Ragister'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/login'

function App() {

  return (
    <>
      <Router>
        <Login />
        <Routes>
          <Route path='/Ragister' element={<Ragister />} />
          <Route path='/Home' element={<>
            <Navbar />
            <Home />
          </>} />
          <Route path='/Aboute' element={<><Navbar /> <Aboute /></>} />
          <Route path='/YoutubeHome' element={<>
            <Navbar />
            {/* <Slider />
       <Hero/> */}
            <Youtube />
            <YutubeHome />
            <Footer />
          </>} />
          <Route path='/YoutubeVideos' element={<>
            <Navbar />
            {/* <Slider />
       <Hero/> */}
            <Youtube />
            <YoutubeVideos />
            <Footer />
          </>} />
          <Route path='/YoutubeAbout' element={
            <>
              <Navbar />
              {/* <Slider />
       <Hero/> */}
              <Youtube />
              <YoutubeAbout />
              <Footer />
            </>
          } />
        </Routes>
        <ToastContainer />
      </Router>



    </>)
}

export default App