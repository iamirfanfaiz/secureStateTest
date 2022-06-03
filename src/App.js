// import logo from './logo.svg';
import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'
import './App.scss';
import 'boxicons'
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import NewHome from './components/pages/NewHome';
import Design from './components/pages/Design';
import Develop from './components/pages/Develop';
import Operate from './components/pages/Operate';
import Pricing from './components/pages/Pricing';
import Platform from './components/pages/Platform';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/pages/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const ref = useRef(null)

  return (
    <div>
      <Router>
        <ScrollToTop/>
        <LoadingBar color='#f11946' ref={ref} />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-home' element={<NewHome />} />
          <Route path='/develop' element={<Design />} />
          <Route path='/design' element={<Develop />} />
          <Route path='/operate' element={<Operate />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/platform' element={<Platform />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
