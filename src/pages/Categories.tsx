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
        <div className='m-5 border-2 border-background-50 bg-background-300 text-text-950'>
            <h1>{category.name}</h1>
            <p>{category.desc}</p>
            <ul >
                {category.cuts.map(cut => (
                    <Link to={`/Products/Cuts/${cut.id}`} key={cut.name} >
                        <div className='m-5 border-2 border-primary-700 bg-background-500 text-text-950'>

                        <h3>{cut.name}</h3>
                        <p>{cut.description}</p>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default CategoryPage;
