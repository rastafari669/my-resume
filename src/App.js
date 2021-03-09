import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AOS from 'aos';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experinece from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    AOS.init({
        duration:2000
    })
    AOS.refresh();
 }, [])

  return (
    <>
    <Particles
    className='particles'
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:'circle',
            stroke:{
              width:6,
              color:'#f9ab00'
            }
          }
        }
      }}
    />
  
   <Header/>
   <AboutMe/>
   <Services/>
   <Experinece/>
   <Portfolio/>
   <Skills/>
   <Footer/>
   </>
  );
}

export default App;
