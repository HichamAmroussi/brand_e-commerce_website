// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// React Icons
import { MdLocalShipping } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Home = () => {
    return ( 
        <>
            <Navbar />

            {/* Section 1: Header */}
            <section className="h-screen w-full bg-[url('./public/slider-image-1.jpg')] bg-[-600px_0px] bg-cover sm:bg-top flex justify-center items-center">
                <button className="text-sm font-medium border-2 border-black mt-80 py-4 px-10 hover:bg-white hover:border-white duration-300">SHOP NOW</button>
            </section>

            {/* Section 2: Offers */}
            <section className="py-16 md:py-24">
                <main className="flex md:gap-60 gap-9 justify-center">
                    <div className="flex flex-col items-center">
                        <GiRolledCloth className="text-gray-900 text-7xl my-2" />
                        <h3 className="font-bold text-sm md:text-xl">High Quality</h3>
                        <p className="text-sm md:text-base">Satisfied clients</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdLocalShipping className="text-gray-900 text-7xl my-2" />
                        <h3 className="font-bold text-sm md:text-xl">Shipping</h3>
                        <p className="text-sm md:text-base">to all 58 Wilayas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BiSupport className="text-gray-900 text-7xl my-2" />
                        <h3 className="font-bold text-sm md:text-xl">Support</h3>
                        <p className="text-sm md:text-base">7Days/24H</p>
                    </div>
                </main>
            </section>

            {/* Section 3: Product Listing */}
            <section className="min-h-screen py-4">
                <div className="max-w-7xl container mx-auto">
                    <ul className="flex md:gap-20 gap-10 justify-center">
                        <li>
                            <button className="font-medium text-lg">All Products</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg">Hoodies</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg">Tracksuits</button>
                        </li>
                    </ul>

                    <main className="my-8 mx-3 grid grid-cols-2 gap-x-2.5 gap-y-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-3 md:grid-cols-3">
                        <a className="product-container">
                            <figure className="relative pt-[100%]">
                                <img src="/product-images/product1-image1.jpg" alt="Product Thumbnail" className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover" />
                            </figure>
                            <div className="text-center py-2 px-1">
                                <p>Nike Airforce 1</p>
                                <p>6000 DA</p>
                            </div>
                        </a>
                        <a className="product-container">
                            <figure className="relative pt-[100%]">
                                <img src="/product-images/product2-image1.jpg" alt="Product Thumbnail" className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover" />
                            </figure>
                            <div className="text-center py-2 px-1">
                                <p>Vans Old Skool</p>
                                <p>4000 DA</p>
                            </div>
                        </a>
                        <a className="product-container">
                            <figure className="relative pt-[100%]">
                                <img src="/product-images/product3-image1.jpg" alt="Product Thumbnail" className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover" />
                            </figure>
                            <div className="text-center py-2 px-1">
                                <p>Vintage Gray T-shirt</p>
                                <p>1200 DA</p>
                            </div>
                        </a>
                    </main>
                </div>
            </section>

            <Footer />
        </>
     );
}
 
export default Home;