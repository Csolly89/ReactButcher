import { useParams, Link } from 'react-router-dom';
import { categories } from '../data';

function CategoryPage() {
    const { categoryName } = useParams<{ categoryName: string }>();

    // Find the matching category based on the categoryName from the URL
    const category = categories.find(cat => cat.name.toLowerCase() === categoryName?.toLowerCase());

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <div>
            <h1>{category.name}</h1>
            <p>{category.desc}</p>
            <h2>Cuts</h2>
            <ul>
                {category.cuts.map(cut => (
                    <Link to={`/products/cuts/${cut.id}`} key={cut.name}>
                        <h3>{cut.name}</h3>
                        <p>{cut.description}</p>
                        <p>Price: ${cut.price.toFixed(2)}</p>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default CategoryPage;
