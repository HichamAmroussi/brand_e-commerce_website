interface ProductProps {
    product: {
        _id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }
  }

const ProductCard = ({ product }: ProductProps) => {
    return ( 
        <a className="product-container">
            <figure className="relative pt-[100%]">
                <img src={product.thumbnail} alt={product.title} className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover" />
            </figure>
            <div className="text-center py-2 px-1">
                <p>{product.title}</p>
                <p>{product.price} $</p>
            </div>
        </a>
     );
}
 
export default ProductCard;