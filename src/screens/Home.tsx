import { useEffect, useState } from "react";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
// React Icons
import { MdLocalShipping } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Home = () => {
    const [products, setProducts] = useState<any[] | null>(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((response) => {
            // Remove Loading Animation
            setIsPending(false);
            // Change Products State
            setProducts(response.products);
        });
    }, []);

    return ( 
        <>
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Section 1: Header */}
            <section className="h-screen w-full bg-[url('../../public/slider-image-1.jpg')] bg-[-600px_0px] bg-cover sm:bg-top flex justify-center items-center">
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
                            <button className="text-green-600 font-medium text-lg">All Products</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg">Hoodies</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg">Tracksuits</button>
                        </li>
                    </ul>

                    <main className="my-8 mx-3 grid grid-cols-2 gap-x-2.5 gap-y-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-3 md:grid-cols-3">
                        {isPending && (
                            <div className="min-h-full w-full flex justify-center col-span-4">
                                <div className="loading-animation"></div>
                            </div>
                        )}

                        {products &&
                            products.length !== 0 &&
                                products.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                />
                            ))}

                        {products && products.length === 0 && (
                            <div>
                                No Products are available.
                            </div>
                        )}

                    </main>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
     );
}
 
export default Home;