import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="text-sm text-center border-t-[1px] border-solid border-gray-200 mx-5 py-8 md:flex md:justify-between md:mx-12">
            <div className="mb-7 flex gap-5 flex-col md:mb-0 md:flex-row md:gap-10">
                <div>Copyright, Website© 2023</div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Shop</div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Contact us</div>
            </div>
            <div className="flex gap-10 items-center justify-center">
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaInstagram /></div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaFacebookF /></div>
                <div>By Ephwo Dev</div>
            </div>
        </footer>
     );
}
 
export default Footer;