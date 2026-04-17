import mainLogo from './images/logo.png';
import headerBg from './images/header-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDelicious } from '@fortawesome/free-brands-svg-icons';
import { techNewsIndia } from './Data/techNews';
import { Link,NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {

  function homePage() {
    window.location.href = "/";
  };

  return (
    <section className="header" id='header'>

      <div className="headerContainer">

        <img src={headerBg} alt="header-bg" />

        <div className='logo' onClick={homePage}>
          <img className='headerImg' src={mainLogo} alt='pic'/>
          <h3>thougts2binary</h3>
        </div>

        <div className="l-logo">
          {/* <h1>thougts2binary</h1> */}
          {/* <h1>Hello!</h1> */}
        </div>

        <div className='nav-list'>
            <NavLink to="/" className={({isActive}) => isActive ? "active nav-links" : "nav-link"}>Home</NavLink>
            <NavLink to="/" className="nav-hide">Services</NavLink>
            <NavLink to="/" className="nav-hide">Technologies</NavLink>
            <NavLink to="/" className="nav-hide">Products</NavLink>
            <NavLink to="/" className="nav-hide">Testimonials</NavLink>
            <NavLink to="/" className="nav-hide">Team</NavLink>
            <NavLink to="/career" className={({isActive}) => isActive ? "active nav-links" : "nav-link"}>Career</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "active nav-links" : "nav-link"}>Blogs</NavLink>
            <NavLink to="/contact-us" className={({isActive}) => isActive ? "active nav-links" : "nav-link"}>Contact</NavLink>
        </div>

        <div className='nav-list2'>
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Technologies</Link>
            <Link to="/">Products</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Team</Link>
            <NavLink to="/career" >Career</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/contact-us" >Contact</NavLink>
        </div>

        {/* className={ (e) => {
              return e.isActive? "activeRed" : ""
            }} */}

        <div className='hamburger'>
          {/* <FontAwesomeIcon icon={faDelicious}/> */}
          <GiHamburgerMenu />
        </div>

        <div className='social'>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>

        {/* MARQUEE */}

        {/* {<marquee className="marquee" >
          {techNewsIndia.map((techNews) => {
            return (
              <a href="">{techNews.heading}</a>
            )
          })}
        </marquee>} */}

      </div>

    </section>
  )
}
export default Header