import { Link } from "react-router-dom";
import { categories } from "../data";

function Products() {
    return (
        <div className='flex flex-row gap-10 '>
            {categories.map((category)=> (
                <Link to={`/Products/${category.name}`}key={category.id}>
                    <h1>{category.name}</h1>
                    <p>{category.desc}</p>
                </Link>

            ))}

        </div>
    );
}

export default Products;