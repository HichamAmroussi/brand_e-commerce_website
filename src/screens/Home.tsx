import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// React Icons
import { MdLocalShipping } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
// Components
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products, setProducts] = useState<any[] | null>(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((response) => {
                const clothes = response.filter((item: any) => item.category === "women's clothing" || item.category === "men's clothing")
                // Remove Loading Animation
                setIsPending(false);
                // Change Products State
                setProducts(clothes);
                console.log(clothes);
            });
    }, []);

    return ( 
        <>
            {/* Section 1: Header */}
            <section className="h-screen w-full bg-[url('../../public/slider-image-1.jpg')] bg-[-550px_0px] bg-cover sm:bg-top flex flex-col justify-center items-center gap-5 2xl:gap-8">
                <h1 className="text-white mt-60 md:mt-[15.5rem] 2xl:mt-64 text-4xl leading-tight w-[14.2rem] 2xl:text-6xl 2xl:w-96 md:text-5xl md:w-[19rem] 2xl:text-black">Official Merch Available Now</h1>
                <Link to="/shop" className="text-white text-sm font-medium border-2 border-black py-4 px-10 hover:bg-white hover:border-white duration-300 md:text-black">SHOP NOW</Link>
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
                            <button className="text-green-600 font-medium text-lg hover:text-green-600 duration-300">All Products</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg hover:text-green-600 duration-300">Hoodies</button>
                        </li>
                        <li>
                            <button className="font-medium text-lg hover:text-green-600 duration-300">Tracksuits</button>
                        </li>
                    </ul>

                    <main className="my-12 mx-3 grid grid-cols-2 gap-x-2.5 gap-y-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-3 md:grid-cols-3 md:my-16">
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
        </>
     );
}
 
export default Home;