import { Link } from "react-router-dom";

interface ProductProps {
    product: {
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
  }

const ProductCard = ({ product }: ProductProps) => {
    const makeLink = () => {
        return "/products/" + product.title.toLocaleLowerCase().replace(/ /g, "-");
    }

    return ( 
        <Link to={makeLink()} className="product-container">
            <figure className="relative pt-[100%]">
                <img src={product.image} alt={product.title} className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-contain" />
            </figure>
            <div className="text-center py-6 px-1">
                <p className="font-medium">{product.title}</p>
                <p className="font-bold py-2">{product.price} $</p>
            </div>
        </Link>
     );
}
 
export default ProductCard;