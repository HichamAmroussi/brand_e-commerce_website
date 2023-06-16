import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="text-sm mx-14 py-8 md:flex md:justify-between border-t-[1px] border-solid border-gray-200">
            <div className="md:flex gap-10">
                <div>Copyright, Website© 2022</div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Shop</div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Contact us</div>
            </div>
            <div className="flex gap-10">
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaInstagram /></div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaFacebookF /></div>
                <div>By Ephwo Dev</div>
            </div>
        </footer>
     );
}
 
export default Footer;