import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data';
import { applyDiscounts } from '../Sales';
import { CartItem } from '../App';

interface SingleItemProps {
    addToCart: (item: CartItem) => void;
    updateCart: (id: string, change: number) => void;
}

interface Breed {
    name: string;
    portionSizes: PortionSize[];
}

interface PortionSize {
    size: number;
    price: number;
    salePrice?: number;
}

const SingleItem: React.FC<SingleItemProps> = ({ addToCart, updateCart }) => {
    const { cutId } = useParams<{ cutId?: string }>();
    const [quantity, setQuantity] = useState(1);
    const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
    const [selectedPortionSize, setSelectedPortionSize] = useState<PortionSize | null>(null);
    const [discountedCategories, setDiscountedCategories] = useState(categories);

    useEffect(() => {
        // Apply discounts and update state
        const discountedData = applyDiscounts(categories);
        setDiscountedCategories(discountedData);
    }, []);



    if (!cutId) {
        return <div>Cut ID is missing</div>;
    }

    const cutIdNumber = parseInt(cutId, 10);
    if (isNaN(cutIdNumber)) {
        return <div>Invalid Cut ID</div>;
    }

    const cut = discountedCategories
        .flatMap(category => category.cuts)
        .find(cut => cut.id === cutIdNumber);

    useEffect(() => {
        if (cut?.breeds?.length) {
            setSelectedBreed(cut.breeds[0]);
            setSelectedPortionSize(cut.breeds[0].portionSizes[0]);
        }
    }, [cut]);

    if (!cut) {
        return <div>Cut not found</div>;
    }

    const handleAddToCart = () => {
        if (!selectedBreed || !selectedPortionSize) {
            alert("Please select a breed and portion size before adding to cart.");
            return;
        }

        const uniqueKey = `${cut.id}-${selectedBreed.name}-${selectedPortionSize.size}`;

        const cartItem: CartItem = {
            id: uniqueKey,
            name: `${cut.name} (${selectedBreed.name}, ${selectedPortionSize.size}oz)`,
            quantity,
            breed: selectedBreed.name,
            portionSize: selectedPortionSize.size,
            price: selectedPortionSize.salePrice || selectedPortionSize.price,
        };
        addToCart(cartItem);
    };

    const handleQuantityChange = (change: number) => {
        setQuantity(prev => {
            const newQuantity = prev + change;
            if (newQuantity >= 1 && newQuantity <= 100) {
                updateCart(cut.id.toString(), change);
                return newQuantity;
            }
            return prev;
        });
    };

    return (
        <div className='m-5 ml-[6rem] border-2 border-background-50 bg-background-300 text-text-950'>
            <h1>{cut.name}</h1>
            <p>{cut.description}</p>

            {cut.breeds && (
                <div>
                    <h2>Select Breed</h2>
                    <div className="flex gap-2">
                        {cut.breeds.map((breed, index) => (
                            <button
                                key={index}
                                className={`p-2 border ${selectedBreed === breed ? 'bg-primary-500 text-white' : 'bg-white text-black'}`}
                                onClick={() => {
                                    setSelectedBreed(breed);
                                    // setSelectedPortionSize(breed.portionSizes[0]); // Automatically select the first portion size
                                }}
                            >
                                {breed.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {selectedBreed && (
                <div className='mt-4'>
                    <h2>Select Portion Size</h2>
                    <div className="flex gap-2">
                        {selectedBreed.portionSizes.map((size, index) => (
                            <button
                                key={index}
                                className={`p-2 border ${selectedPortionSize === size ? 'bg-primary-500 text-white' : 'bg-white text-black'}`}
                                onClick={() => setSelectedPortionSize(size)}
                            >
                                {size.size}oz -
                                <span className={size.salePrice ? 'line-through' : ''}>${size.price.toFixed(2)}</span>
                                {size.salePrice && <span> ${size.salePrice.toFixed(2)}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className='mt-4'>
                <h2>Quantity</h2>
                <button
                    className="text-background-50 bg-primary-500 rounded-md border-background-700 border-2 w-16 h-6 flex justify-center items-center m-2"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    className="text-background-50 bg-primary-500 rounded-md border-background-700 border-2 w-16 h-6 flex justify-center items-center m-2"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 100}
                >
                    +
                </button>
            </div>

            <button onClick={handleAddToCart} className="mt-4 bg-primary-500 text-white p-2 rounded">
                Add to cart
            </button>
        </div>
    );
}

export default SingleItem;
