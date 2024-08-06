import { CartItem } from "../App";

interface CartProps {
    cart: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
    return (
        <div>
            <h1>Cart Page</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            {item.breeds && item.breeds.length > 0 && (
                                <p>Breeds: {item.breeds.join(", ")}</p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
