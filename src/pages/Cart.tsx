import { CartItem } from "../App";
import React from "react";

interface CartProps {
    cart: CartItem[];
    updateCart: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, updateCart, removeFromCart }) => {
    
    const cartSummary = cart.reduce(
        (
            summary: { [key: string]: { item: CartItem; quantity: number } },
            item
        ) => {
            if (summary[item.id]) {
                summary[item.id].quantity += 1;
            } else {
                summary[item.id] = { item, quantity: 1 };
            }
            return summary;
        },
        {}
    );

    const totalPrice = Object.values(cartSummary).reduce(
        (total, { item }) => total + item.price * item.quantity,
        0
    );

    const handleQuantityChange = (id: string, change: number) => {
        updateCart(id, change);
    };

    return (
        <div>
            <h1>Cart Page</h1>
            {Object.keys(cartSummary).length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(cartSummary).map(({ item }) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td className="flex flex-row justify-center items-center m-5">
                                    <span className="font-bold text-xl">{item.quantity}</span>
                                    <button className="text-text-950 bg-background-50 rounded-md border-primary-500 border-2 w-16 h-6 flex  justify-center items-center m-2 "
                                        onClick={() => handleQuantityChange(item.id, -1)} 
                                        disabled={item.quantity <= 1}>
                                        -
                                    </button>
                                    <button className="text-text-950 bg-background-50 rounded-md border-primary-500 border-2 w-16 h-6 flex  justify-center items-center m-2 " 
                                    onClick={() => handleQuantityChange(item.id, 1)} 
                                    disabled={item.quantity >= 100}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td colSpan={2}>${totalPrice.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
