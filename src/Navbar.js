import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItem from './NavItem';
import logo from './images/QuizVizz-logo.png'
import './Navbar.css';
// import History from "./History";


const Navbar = ({ token, setToken, user, setUser, setLogged, page }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log("log out");
    // setToken("");

    console.log(localStorage.getItem('uerId'));

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');

    // setLogged(false);
    navigate('/login');
  };
  let history=''
  let home=''
  let dashboard=''
  if(page=='History'){
    history='active';
    home='';
  }
  if(page=='Home'){
    history='';
    home='active';
  }

  const links = [
    { text: 'Home', path: '/', icons: 'home' },
    { text: 'Dashboard', path: '/dashboard', icons: 'chart-line' },
    { text: 'History', path: '/history', icons: 'timeline' },
    { text: 'Profile', path: '/profile', icons: 'user' },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

return(
  <>
    <nav className={`side-navbar ${isCollapsed ? 'collapsed' : ''}`}>

{/* Website name and logo */}
<button className="navbar-toggler" onClick={toggleNavbar}>
<i class={`fa-solid fa-chevron-${isCollapsed? 'right':'left'}`}></i>
</button>
<div className="navbar-header">
  <a href="/">
  <img class="logo" src={logo}/>
  </a>
</div>

<ul className="nav-list">
  {links.map((link) => (
    <NavItem key={link.text} {...link} />
  ))}
  <NavItem text="Logout" onClick={handleLogout}/> 
</ul>
</nav>
  </>
)
};


export default Navbar;