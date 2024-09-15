import { Link } from 'react-router-dom';

interface ButtonProductProps {
    productId: string; 
  }

const ButtonProduct = ({ productId }: ButtonProductProps) => {
  return (
    <Link to={`/product/${productId}`}>
      <button className="btn btn-primary">
        View Product
      </button>
    </Link>
  );
};

export default ButtonProduct;
