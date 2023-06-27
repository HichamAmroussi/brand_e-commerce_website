// Custom Hooks
import useFetch from "../hooks/useFetch";
// Interfaces
interface ProductProps {
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

const Product = () => {
    const productID = window.location.pathname.slice(10);
    const [product, isPending] = useFetch<ProductProps>(`/products/${productID}`, {} as ProductProps);
    console.log(product);


    return ( 
        <div className="text-5xl min-h-screen flex items-center justify-center">{product.title}</div>
    );
}
 
export default Product;