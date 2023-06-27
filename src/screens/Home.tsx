// Packages
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// React Icons
import { MdLocalShipping } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
// Components
import ProductCard from "../components/ProductCard";
// Custom Hooks
import useFetch from "../hooks/useFetch";
// Interfaces
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

const Home = () => {
    const [products, isPending] = useFetch<Product[]>("/products", []);

    return ( 
        <>
            {/* Section 1: Header */}
            <section className="relative">
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="slider-image-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="slider-image-2.jpg" />
                    </SwiperSlide>
                </Swiper>
                
                <div className="absolute bottom-[30%] left-[50%] translate-x-[-50%] z-10 flex gap-5 flex-col items-center sm:gap-8">
                    <h1 className="text-white text-4xl leading-tight w-[14.2rem] 2xl:text-6xl 2xl:w-96 md:text-5xl md:w-[19rem]">Official Merch Available Now</h1>
                    <Link to="/shop" className="text-white text-sm font-medium border-2 border-black py-4 px-10 hover:text-black hover:bg-white hover:border-white duration-300">SHOP NOW</Link>
                </div>
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

                        {!isPending && products.length !== 0 &&
                            products.filter((item: Product) => item.category === "women's clothing" || item.category === "men's clothing").map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                />
                            ))
                        }

                        {!isPending && products.length === 0 && (
                            <div>No Products are available.</div>
                        )}

                    </main>
                </div>
            </section>
        </>
     );
}
 
export default Home;