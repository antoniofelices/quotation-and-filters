import { createContext, useState } from 'react'
import products from '@data/products'

export const RequestQuotationContext = createContext({})

export const RequestQuotationProvider = ({ children }) => {
    const [isAnnual, setIsAnnual] = useState(false)
    const [checkedItems, setCheckedItems] = useState({})
    const [quantities, setQuantities] = useState({})
    const [total, setTotal] = useState(0)

    const calculateTotal = (checkedItems, quantities) => {
        let newTotal = 0
        let quantity = 1
        let price = 0

        products.forEach((product) => {
            if (checkedItems[product.id]) {
                quantity = quantities[product.id] ?? 1
                price = isAnnual
                    ? product.price * 12 - product.price * 12 * 0.2
                    : product.price
                newTotal += price * quantity
            }
        })

        setTotal(newTotal)
    }

    const isAnnualHandler = (newValue) => {
        setIsAnnual(newValue)
    }

    const quantityChangeHandler = (productId, newQuantity) => {
        const updatedQuantities = {
            ...quantities,
            [productId]: newQuantity,
        }
        setQuantities(updatedQuantities)
        calculateTotal(checkedItems, updatedQuantities)
    }

    const checkHandler = (e, product) => {
        const isChecked = e.target.checked
        const updatedChecked = {
            ...checkedItems,
            [product.id]: isChecked,
        }
        setCheckedItems(updatedChecked)
        calculateTotal(updatedChecked, quantities)
    }

    const allValues = {
        products,
        quantities,
        isAnnual,
        isAnnualHandler,
        checkedItems,
        total,
        checkHandler,
        quantityChangeHandler,
    }

    return (
        <RequestQuotationContext.Provider value={allValues}>
            {children}
        </RequestQuotationContext.Provider>
    )
}
