export interface Category {
    name: string;
    id: number;
    desc: string;
    cuts: Product[];
}
interface Product {
    id: number;
    name: string;
    description: string;
    breeds?: {
        name: string;
        portionSizes: PortionSize[];
    }[]; // Optional, since not all cuts might have specific breeds
    price?: number;  // chicken category doesn't have breeds to set price so keep optional price interface for chicken
}
interface PortionSize {
    size: number;
    price: number;
}

const beefCategory: Category = {
    name: "Beef",
    id: 1,
    desc: "High-quality beef cuts sourced from a variety of premium breeds, offering a range of flavors and textures for every culinary need.",
    cuts: [
        {
            id: 101, name: "Ribeye", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Richly marbled steak, juicy and flavorful."
        },

        {
            id: 102, name: "NY Strip", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Tender, flavorful strip steak."
        },

        {
            id: 103, name: "Filet Mignon", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "The most tender cut of beef."
        },

        {
            id: 104, name: "T-bone", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Combination of filet and strip steak."
        },

        {
            id: 105, name: "Porterhouse", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Large T-bone with a bigger filet."
        },

        {
            id: 106, name: "Bi Ribeye", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Double ribeye cut, exceptionally rich flavor."
        },

        {
            id: 107, name: "Cowboy Steak", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Bone-in ribeye, great for grilling."
        },

        {
            id: 108, name: "Flat Iron", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Tender and flavorful, great for grilling."
        },

        {
            id: 109, name: "Denver", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Well-marbled cut, juicy and tender."
        },

        {
            id: 110, name: "Tri-tip", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Flavorful and versatile cut, great for roasting."
        },

        {
            id: 111, name: "Picanha", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Brazilian cut, rich in flavor and tenderness."
        },

        {
            id: 112, name: "Chuck Roast", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Great for slow cooking and braising."
        },

        {
            id: 113, name: "Chuck Eye Steak", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Flavorful cut from the chuck, similar to ribeye."
        },

        {
            id: 114, name: "Tip Roast", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Lean and flavorful cut, great for roasting."
        },

        {
            id: 115, name: "London Broil", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Marinated and grilled for best flavor."
        },

        {
            id: 116, name: "Stew Meat", breeds: [
                {
                    name: "Hereford",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Black Angus",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "American Wagyu",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Cubed beef for soups and stews."
        },

        // { id: 117 ,name: "Ground Beef", breeds: [
        //     {
        //         breed: "Hereford",
        //         portionSizes: [
        //             { size: 12, price: 19.99 },
        //             { size: 16, price: 24.99 },
        //             { size: 24, price: 34.99 }
        //         ]
        //     },
        //     {
        //         breed: "Black Angus",
        //         portionSizes: [
        //             { size: 12, price: 19.99 },
        //                 { size: 16, price: 24.99 },
        //                 { size: 24, price: 34.99 }
        //         ]
        //     },
        //     {
        //     breed: "American Wagyu",
        //     portionSizes: 
        //     [
        //         { size: 12, price: 19.99 },
        //         { size: 16, price: 24.99 },
        //         { size: 24, price: 34.99 }
        //     ]
        // },
        //     ], description: "Versatile ground meat for various dishes."}
    ]
};

// Pork category with breeds and cuts
const porkCategory: Category = {
    name: "Pork",
    id: 2,
    desc: "A variety of pork cuts from well-regarded breeds, known for their tenderness and flavor, perfect for a wide range of dishes.",
    cuts: [
        {
            id: 201, name: "Blade Chop", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Flavorful pork chop cut from the shoulder."
        },

        {
            id: 202, name: "Loin Chop", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Lean and tender cut from the loin."
        },

        {
            id: 203, name: "Rib Chop", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Tender and juicy cut from the rib section."
        },

        {
            id: 204, name: "Tenderloin", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "The most tender cut of pork."
        },

        {
            id: 205, name: "Boston Butt", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Ideal for slow cooking and BBQ."
        },

        {
            id: 206, name: "Ham", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Cured and smoked leg of pork."
        },

        {
            id: 207, name: "Baby Back Ribs", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Tender ribs from the back, great for grilling."
        },

        {
            id: 208, name: "Spare Ribs", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Flavorful ribs from the belly, perfect for BBQ."
        },

        {
            id: 209, name: "Sirloin Chop", breeds: [
                {
                    name: "Yorkshire",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Duroc",
                    portionSizes: [
                        { size: 12, price: 19.99 },
                        { size: 16, price: 24.99 },
                        { size: 24, price: 34.99 }
                    ]
                },
                {
                    name: "Berkshire",
                    portionSizes:
                        [
                            { size: 12, price: 19.99 },
                            { size: 16, price: 24.99 },
                            { size: 24, price: 34.99 }
                        ]
                },
            ], description: "Lean cut from the sirloin, flavorful and juicy."
        },

        // {id: 210 , name: "Ground Pork", breeds: [
        //     {
        //         breed: "Yorkshire",
        //         portionSizes: [
        //             { size: "12oz", price: 19.99 },
        //             { size: "16oz", price: 24.99 },
        //             { size: "24oz", price: 34.99 }
        //         ]
        //     },
        //     {
        //         breed: "Duroc",
        //         portionSizes: [
        //             { size: "12oz", price: 19.99 },
        //             { size: "16oz", price: 24.99 },
        //             { size: "24oz", price: 34.99 }
        //         ]
        //     },
        //     {
        //     breed: "Berkshire",
        //     portionSizes: 
        //     [
        //         { size: "12oz", price: 19.99 },
        //         { size: "16oz", price: 24.99 },
        //         { size: "24oz", price: 34.99 }
        //     ]
        // },
        //     ], description: "Versatile ground meat for various dishes." }
    ]
};

// Chicken category without breed options
const chickenCategory: Category = {
    name: "Chicken",
    id: 3,
    desc: "Fresh, high-quality chicken cuts suitable for grilling, roasting, and frying, offering lean and flavorful options for any meal.",
    cuts: [
        {
            id: 301, name: "Drumsticks", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Juicy and tender chicken legs."
        },
        {
            id: 302, name: "Wings", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Perfect for frying or grilling, flavorful and fun."
        },
        {
            id: 303, name: "Airline Breast", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Boneless breast with skin, elegant presentation."
        },
        {
            id: 304, name: "Boneless Breast", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Lean and versatile cut, easy to cook."
        },
        {
            id: 305, name: "Thighs", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Rich flavor and juiciness, great for grilling."
        },
        {
            id: 306, name: "Whole Chicken", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Perfect for roasting or grilling."
        },
        {
            id: 307, name: "Chicken Tenders", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Tender strips, great for frying or baking."
        },
        {
            id: 308, name: "Chicken Sausage", breeds: [
                {
                    name: "Free Range",
                    portionSizes: [
                        { size: 6, price: 10.00 },
                        { size: 8, price: 12.00 },
                    ],
                },
                {
                    name: "Organic",
                    portionSizes: [
                        { size: 6, price: 11.00 },
                        { size: 8, price: 13.00 },
                    ],
                },
            ], description: "Flavorful sausage made from chicken meat."
        }
    ]
};

// Export categories
export const categories = [beefCategory, porkCategory, chickenCategory];
