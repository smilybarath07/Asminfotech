import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashCursor from './cursor';
import './App.css'
import Home from './home';
import About from './about';
import Service from './service';
import Product from './product';
import Project from './project';
import Contact from './contact';
import Footer from './footer';
import Projects from './projects';
import Support from './support';
import Career from './career';
import Request from './request';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";


export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      {/* <SplashCursor/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/support" element={<Support />} />
        <Route path="/career" element={<Career />} />
        <Route path="/request" element={<Request />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  ) 
}
