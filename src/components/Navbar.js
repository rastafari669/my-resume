import React,{useState} from 'react';
import logo from '../logo2.png';
//REACT FONTAWESOME IMPORT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll'


const Navbar = () => {

const [navbar,setNavbar] = useState(false);


const changeBackground = () =>{
  if(window.pageYOffset > 0){
  setNavbar(true)
  }else{
    setNavbar(false);
  }
}

window.addEventListener('scroll', changeBackground)

    return (
      <>
     
        <nav data-aos='fade-down'  className={navbar ? 'navbar navbar-expand-lg fixed-top active' : 'navbar navbar-expand-lg fixed-top' }>
            <div className="container">

            
  <div className="container-fluid">
    <Link smooth={true}  to='home' className="navbar-brand" href="#"><img className='logo' src={logo} alt="my-logo"/> {' '}Portfo<span>lio</span></Link>
    <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link smooth={true} to='home' className="nav-link" aria-current="page" href="#">Home</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='about' offset={-110} className="nav-link" href="#">About</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='education' offset={-110} className="nav-link" aria-current="page" href="#">Education</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='skills' offset={-110} className="nav-link" href="#">Skills</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='experience' offset={-110} className="nav-link" href="#">Work Experience</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='portfolio' offset={-110} className="nav-link" href="#">Portfolio</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to='contacts' offset={-110} className="nav-link" href="#">Contacts</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
  </div>
</nav>
</>
    )
}

export default Navbar
