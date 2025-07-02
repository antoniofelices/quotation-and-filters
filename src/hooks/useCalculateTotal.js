import { useMemo } from 'react'

export const useCalculateTotal = (
    isAnnual,
    checkedItems,
    langs,
    pages,
    products
) => {
    return useMemo(() => {
        let newTotal = 0
        let addOns = 0
        let price = 0
        let quantityAddOns = pages + langs

        products.forEach((product) => {
            if (checkedItems[product.id]) {
                price = isAnnual
                    ? product.price * 12 - product.price * 12 * 0.2
                    : product.price
                addOns = product.id === 3 ? quantityAddOns * 30 : 0
                newTotal += price + addOns
            }
        })
        return newTotal
    }, [isAnnual, checkedItems, langs, pages, products])
}
