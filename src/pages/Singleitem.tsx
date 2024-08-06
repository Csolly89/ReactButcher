import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data';
import { CartItem } from '../App';

interface SingleItemProps {
    addToCart: (item: CartItem) => void;
    updateCart: (id: string, change: number) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({ addToCart, updateCart }) => {
    const { cutId } = useParams<{ cutId?: string }>();
    const [quantity, setQuantity] = useState(1);

    if (!cutId) {
        return <div>Cut ID is missing</div>;
    }

    const cutIdNumber = parseInt(cutId, 10);
    if (isNaN(cutIdNumber)) {
        return <div>Invalid Cut ID</div>;
    }

    const cut = categories
        .flatMap(category => category.cuts)
        .find(cut => cut.id === cutIdNumber);

    if (!cut) {
        return <div>Cut not found</div>;
    }

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            id: cut.id.toString(),
            name: cut.name,
            price: cut.price,
            quantity,
            breeds: cut.breeds,
        };
        addToCart(cartItem);
    };

    const handleQuantityChange = (change: number) => {
        // Ensure that the item is already in the cart
        updateCart(cut.id.toString(), change);
    };

    return (
        <div>
            <h1>{cut.name}</h1>
            <p>{cut.description}</p>
            <p>Price: ${cut.price.toFixed(2)}</p>
            <div>
                <h2>Quantity</h2>
                <span>{quantity}</span>
                <button className="text-background-50 bg-primary-500 rounded-md border-background-700 border-2 w-16 h-6 flex  justify-center items-center m-2 " 
                    onClick={() => {
                        setQuantity(prev => Math.max(prev - 1, 1));
                        handleQuantityChange(-1); // Update quantity in the cart
                    }}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <button className="text-background-50 bg-primary-500 rounded-md border-background-700 border-2 w-16 h-6 flex  justify-center items-center m-2 " 
                    onClick={() => {
                        setQuantity(prev => Math.min(prev + 1, 100));
                        handleQuantityChange(1); // Update quantity in the cart
                    }}
                    disabled={quantity >= 100}
                >
                    +
                </button>
            </div>
            <button onClick={handleAddToCart}>Add to cart</button>
            {cut.breeds && cut.breeds.length > 0 && (
                <div>
                    <h2>Available Breeds</h2>
                    <ul>
                        {cut.breeds.map((breed, index) => (
                            <li key={index}>{breed}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SingleItem;
