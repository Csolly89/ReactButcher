import { Category } from "./data";

export const applyDiscounts = (categories: Category[]): Category[] => {
    const today = new Date().getDay(); // Sunday is 0, Monday is 1, etc.

    return categories.map(category => ({
        ...category,
        cuts: category.cuts.map(cut => {
            if (today === 1) { // Monday
                return {
                    ...cut,
                    breeds: cut.breeds?.map(breed => ({
                        ...breed,
                        portionSizes: breed.portionSizes.map(portionSize => ({
                            ...portionSize,
                            salePrice: portionSize.price * 0.8, // 20% discount
                        }))
                    }))
                };
            }

            switch (today) {
                case 2: // Tuesday
                    if ([101, 102, 103, 104, 105, 106, 107].includes(cut.id)) {
                        return {
                            ...cut,
                            breeds: cut.breeds?.map(breed => ({
                                ...breed,
                                portionSizes: breed.portionSizes.map(portionSize => ({
                                    ...portionSize,
                                    salePrice: portionSize.price * 0.9, // 10% discount
                                }))
                            }))
                        };
                    }
                    break;
                case 3: // Wednesday
                    if ([201, 202, 203, 209].includes(cut.id)) {
                        return {
                            ...cut,
                            breeds: cut.breeds?.map(breed => ({
                                ...breed,
                                portionSizes: breed.portionSizes.map(portionSize => ({
                                    ...portionSize,
                                    salePrice: portionSize.price * 0.85, // 15% discount
                                }))
                            }))
                        };
                    }
                    break;
                case 4: // Thursday
                    if ([301, 302, 303, 304, 305, 306, 307, 308].includes(cut.id)) {
                        return {
                            ...cut,
                            breeds: cut.breeds?.map(breed => ({
                                ...breed,
                                portionSizes: breed.portionSizes.map(portionSize => ({
                                    ...portionSize,
                                    salePrice: portionSize.price * 0.85, // 15% discount
                                }))
                            }))
                        };
                    }
                    break;
                case 5: // Friday
                    if ([101, 107, 108, 109, 110, 111, 112, 204, 205, 207, 208, 302, 303, 305, 306, 308].includes(cut.id)) {
                        return {
                            ...cut,
                            breeds: cut.breeds?.map(breed => ({
                                ...breed,
                                portionSizes: breed.portionSizes.map(portionSize => ({
                                    ...portionSize,
                                    salePrice: portionSize.price * 0.85, // 15% discount
                                }))
                            }))
                        };
                    }
                    break;
            }

            // No discount applied
            return {
                ...cut,
                breeds: cut.breeds?.map(breed => ({
                    ...breed,
                    portionSizes: breed.portionSizes.map(portionSize => ({
                        ...portionSize,
                        salePrice: null // No sale price, retain original price
                    }))
                }))
            };
        })
    }));
};


// switch (dayOfWeek) {
//     case 1: // Monday
//         discountPercentage = 0.2
//         VeteranDiscount(discountPercentage);
//         break;
//     case 2: // Tuesday
//         discountPercentage = 0.5
//         discountedCutIds = [101,102,103,104,105,106,107]
//         applyDailyDiscounts(discountedCutIds, discountPercentage);
//         break;
//     case 3: // Wednesday
//         discountPercentage = 0.15
//         discountedCutIds = [201,202,203,209]
//         applyDailyDiscounts(discountedCutIds, discountPercentage);
//         break;
//     case 4: // Thursday
//         discountPercentage = 0.1
//         discountedCutIds = [301,302,303,304,305,306,307,308]
//         applyDailyDiscounts(discountedCutIds, discountPercentage);
//         break;
//     case 5: // Friday
//         discountPercentage = 0.25
//         discountedCutIds = [101,107,108,109,110,111,112,204,205,207,208,302,303,305,306,308]
//         applyDailyDiscounts(discountedCutIds, discountPercentage);
//         break;
//     default:
//         // No discount for weekends
//         break;