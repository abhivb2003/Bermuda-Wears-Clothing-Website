import { Link, unstable_useViewTransitionState, useActionData } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Navbar from './navbar';
import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div className="px-4 flexBetween py-3 max-xs:px-2">
            {/* logo */}
            <div>
                <Link><img src={logo} alt="" height={66} width={88} /></Link>
            </div>
            {/* Navbar Desktop */}
            <Navbar containerStyles={"hidden md:flex gap-x-5 x1:gap-x-10 medium-15 "}/>
            {/* Navbar mobile */}
            <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>
            {/* buttons */}
            <div>
              {!menuOpened? (<MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu}/>) : (<MdClose lassName='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu}/>)}
            </div>
        </div>
    </header>
  )
}

export default Header
