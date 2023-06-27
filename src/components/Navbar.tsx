import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// React Icons
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [activeScroll, setActiveScroll] = useState(false);
    const [hamburgerClick, setHamburgerClick] = useState(false);

    const CustomLink = ({ to, children, ...props }: any) => {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <li className={isActive ? "text-green-600 my-6 md:my-0:" : "my-6 md:my-0"}>
                <Link to ={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    const handleClick = () => {
        setHamburgerClick(!hamburgerClick);

        if(window.scrollY === 0) {
            setActiveScroll(!activeScroll);
        }
    }

    const handleMouseLeave = () => {
        if(window.scrollY === 0) {
            setActiveScroll(false);
        }
    }

    const handleScroll = () => {
        if(window.scrollY > 0) {
            setActiveScroll(true);
        } else {
            setActiveScroll(false);
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return ( 
        <header>
            <nav onMouseEnter={() => setActiveScroll(true)} onMouseLeave={handleMouseLeave} 
                className={ 
                    activeScroll 
                        ? "bg-white p-4 w-full md:p-5 md:flex md:items-center md:justify-between fixed duration-500 z-20" 
                        : "text-white bg-transparent p-4 w-full md:p-5 md:flex md:items-center md:justify-between fixed duration-500 z-20" 
            }>

                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-3xl block cursor-pointer mx-0 md:mx-2 md:hidden" onClick={handleClick}>
                        {hamburgerClick? <IoClose /> : <GiHamburgerMenu />}
                    </span>

                    <Link to="/" className="md:mx-10">
                        <img className="h-20 inline" src="logo.png" alt="Website Logo" />
                    </Link>
                </div>

                {/* Middle Menu */}
                <ul className={
                    hamburgerClick 
                    ? "bg-white md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[80px] transition-all ease-in duration-300" : "bg-transparent md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300"
                }>
                    <CustomLink to="/" className="mx-7 hover:text-green-600 duration-75">Home</CustomLink>
                    <CustomLink to="/shop" className="mx-7 hover:text-green-600 duration-75">Shop</CustomLink>
                    <CustomLink to="/contact-us" className="mx-7 hover:text-green-600 duration-75">Contact us</CustomLink>
                </ul>

                {/* Cart */}
                <Link to="/cart" className="gap-1.5 flex absolute top-[38px] right-6 md:static md:mx-10">
                    <FiShoppingCart className="text-2xl" />
                    <div className={ 
                        activeScroll 
                            ? "bg-black text-white rounded-full px-2" 
                            : "text-black bg-white rounded-full px-2"
                    }>0</div>
                </Link>
            </nav>
        </header>
     );
}
 
export default Navbar;