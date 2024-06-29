import hamburger  from "./assets/hamburger.svg";
import logo  from "./assets/logo.png";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container drop-shadow-xl'>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={59}
            height={29}
            className='m-0 w-[129px] h-[29px] px-8'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
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
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block px-5'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
