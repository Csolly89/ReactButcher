interface Product {
    name: string;
    description: string;
    price: number;
    breeds?: string[]; // Optional, since not all cuts might have specific breeds
}

interface Category {
    name: string;
    id: number;
    desc: string;
    cuts: Product[];
}
// Beef category with breeds and cuts
const beefCategory: Category = {
    name: "Beef",
    id: 1,
    desc: "High-quality beef cuts sourced from a variety of premium breeds, offering a range of flavors and textures for every culinary need.",
    cuts: [
        { name: "Ribeye", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Richly marbled steak, juicy and flavorful.", price: 19.99 },
        { name: "NY Strip", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Tender, flavorful strip steak.", price: 18.99 },
        { name: "Filet Mignon", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "The most tender cut of beef.", price: 29.99 },
        { name: "T-bone", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Combination of filet and strip steak.", price: 24.99 },
        { name: "Porterhouse", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Large T-bone with a bigger filet.", price: 27.99 },
        { name: "Bi Ribeye", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Double ribeye cut, exceptionally rich flavor.", price: 21.99 },
        { name: "Cowboy Steak", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Bone-in ribeye, great for grilling.", price: 24.99 },
        { name: "Flat Iron", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Tender and flavorful, great for grilling.", price: 16.99 },
        { name: "Denver", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Well-marbled cut, juicy and tender.", price: 17.99 },
        { name: "Tri-tip", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Flavorful and versatile cut, great for roasting.", price: 15.99 },
        { name: "Picanha", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Brazilian cut, rich in flavor and tenderness.", price: 19.99 },
        { name: "Chuck Roast", description: "Great for slow cooking and braising.", price: 10.99 },
        { name: "Chuck Eye Steak", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Flavorful cut from the chuck, similar to ribeye.", price: 13.99 },
        { name: "Tip Roast", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Lean and flavorful cut, great for roasting.", price: 12.99 },
        { name: "London Broil", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Marinated and grilled for best flavor.", price: 14.99 },
        { name: "Stew Meat", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Cubed beef for soups and stews.", price: 9.99 },
        { name: "Ground Beef", breeds: ["American Wagyu", "Black Angus", "Hereford"], description: "Versatile ground meat for various dishes.", price: 8.99 }
    ]
};

// Pork category with breeds and cuts
const porkCategory: Category = {
    name: "Pork",
    id: 2,
    desc: "A variety of pork cuts from well-regarded breeds, known for their tenderness and flavor, perfect for a wide range of dishes.",
    cuts: [
        { name: "Blade Chop", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Flavorful pork chop cut from the shoulder.", price: 9.99 },
        { name: "Loin Chop", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Lean and tender cut from the loin.", price: 10.99 },
        { name: "Rib Chop", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Tender and juicy cut from the rib section.", price: 11.99 },
        { name: "Tenderloin", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "The most tender cut of pork.", price: 14.99 },
        { name: "Boston Butt", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Ideal for slow cooking and BBQ.", price: 7.99 },
        { name: "Ham", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Cured and smoked leg of pork.", price: 8.99 },
        { name: "Baby Back Ribs", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Tender ribs from the back, great for grilling.", price: 12.99 },
        { name: "Spare Ribs", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Flavorful ribs from the belly, perfect for BBQ.", price: 11.99 },
        { name: "Sirloin Chop", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Lean cut from the sirloin, flavorful and juicy.", price: 10.99 },
        { name: "Ground Pork", breeds: ["Berkshire", "Duroc", "Yorkshire"], description: "Versatile ground meat for various dishes.", price: 7.49 }
    ]
};

// Chicken category without breed options
const chickenCategory: Category = {
    name: "Chicken",
    id: 3,
    desc: "Fresh, high-quality chicken cuts suitable for grilling, roasting, and frying, offering lean and flavorful options for any meal.",
    cuts: [
        { name: "Drumsticks", description: "Juicy and tender chicken legs.", price: 3.99 },
        { name: "Wings", description: "Perfect for frying or grilling, flavorful and fun.", price: 4.99 },
        { name: "Airline Breast", description: "Boneless breast with skin, elegant presentation.", price: 8.99 },
        { name: "Boneless Breast", description: "Lean and versatile cut, easy to cook.", price: 7.99 },
        { name: "Thighs", description: "Rich flavor and juiciness, great for grilling.", price: 6.49 },
        { name: "Whole Chicken", description: "Perfect for roasting or grilling.", price: 9.99 },
        { name: "Chicken Tenders", description: "Tender strips, great for frying or baking.", price: 5.99 },
        { name: "Chicken Sausage", description: "Flavorful sausage made from chicken meat.", price: 6.99 }
    ]
};

// Export categories
export const categories = [beefCategory, porkCategory, chickenCategory];
