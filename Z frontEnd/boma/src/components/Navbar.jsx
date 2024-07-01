import hamburger  from "./assets/hamburger.svg";
import logo  from "./assets/logo.png";
import { navLinks } from "../constants/index.js";
import './navbar.css'


const Navbar = () => {
  return (
    <header className='navbar-header'>
      <nav>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={59}
            height={29}
            className='m-0 w-[129px] h-[29px] px-8'
          />
        </a>
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul> 
        <div className='nav-button'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Order now</a>
        </div>
        <div className='hidden max-lg:block px-5'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
