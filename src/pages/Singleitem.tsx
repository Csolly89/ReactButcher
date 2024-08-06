import { useParams } from 'react-router-dom';
import { categories } from '../data'
import { CartItem } from '../App';
interface SingleItemProps {
    addToCart: (item: CartItem) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({ addToCart }) => {
    const { cutId } = useParams<{ cutId?: string }>();
    // Validation check to make TypeScript happy
    if (!cutId) {
        return <div>Cut ID is missing</div>;
    }
    // Convert cutId to a number
    const cutIdNumber = parseInt(cutId, 10);
    if (isNaN(cutIdNumber)) {
        return <div>Invalid Cut ID</div>;
    }
    // Find the cut based on cutId
    let cut = null;
    for (const category of categories) {
        cut = category.cuts.find(cut => cut.id === cutIdNumber);
        if (cut) break;
    }
    // Render a message if the cut is not found
    if (!cut) {
        return <div>Cut not found</div>;
    }

    const cartItem: CartItem = {
        id: cut.id.toString(), // Assuming cut.id is a number, convert to string if needed
        name: cut.name,
        price: cut.price,
        ...(cut.breeds && cut.breeds.length > 0 && { breeds: cut.breeds })
    };

    return (
        <div>
            <h1>{cut.name}</h1>
            <p>{cut.description}</p>
            <p>Price: ${cut.price.toFixed(2)}</p>
            <button onClick={() => addToCart(cartItem)}>Add to cart</button>
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
