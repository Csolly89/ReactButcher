import { useParams } from 'react-router-dom';
import { categories } from '../data'; // Adjust the path as necessary

function SingleItem() {
    const { cutId } = useParams<{ cutId?: string }>();
    
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
    
    return (
        <div>
            <h1>{cut.name}</h1>
            <p>{cut.description}</p>
            <p>Price: ${cut.price.toFixed(2)}</p>
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
