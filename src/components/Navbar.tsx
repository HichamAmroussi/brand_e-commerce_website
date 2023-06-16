import { useState } from "react";
// React Icons
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [activeScroll, setActiveScroll] = useState(false);
    const [hamburgerClick, setHamburgerClick] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 0) {
            setActiveScroll(true);
        } else {
            setActiveScroll(false);
        }
    }

    const handleClick = () => {
        setHamburgerClick(!hamburgerClick);
        setActiveScroll(!activeScroll);
    }

    const handleMouseLeave = () => {
        if(window.scrollY === 0) {
            setActiveScroll(false);
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return ( 
        <header>
            <nav onMouseEnter={() => setActiveScroll(true)} onMouseLeave={handleMouseLeave} className={ 
                activeScroll 
                ? "bg-white p-5 w-full md:flex md:items-center md:justify-between fixed duration-500 z-10" 
                : "text-white bg-transparent p-5 w-full md:flex md:items-center md:justify-between fixed duration-500 z-10" 
            }>

                <div className="flex justify-between items-center">
                    <a href="/" className="md:mx-10">
                        <img className="h-20 inline" src="logo.png" alt="Website Logo" />
                    </a>

                    <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={handleClick}>
                        {hamburgerClick? <IoClose /> : <GiHamburgerMenu />}
                    </span>
                </div>

                <ul className={
                    hamburgerClick 
                    ? "bg-white md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[80px] transition-all ease-in duration-300" : "bg-transparent md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300"
                }>
                    <li className="mx-7 my-6 md:my-0">
                        <a href="/" className="hover:text-green-600 duration-75">Home</a>
                    </li>
                    <li className="mx-7 my-6 md:my-0">
                        <a href="/cart" className="hover:text-green-600 duration-75">Shop</a>
                    </li>
                    <li className="mx-7 my-6 md:my-0">
                        <a href="/contact-us" className="hover:text-green-600 duration-75">Contact us</a>
                    </li>
                </ul>

                <a href="/cart" className="gap-1.5 hidden md:flex md:mx-10">
                    <FiShoppingCart className="text-2xl" />
                    <div className={ 
                        activeScroll 
                            ? "bg-black text-white rounded-full px-2" 
                            : "text-black bg-white rounded-full px-2"
                    }>0</div>
                </a>
            </nav>
        </header>
     );
}
 
export default Navbar;