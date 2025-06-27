import { useId, useState } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'
import Toggle from '@components/base/Toggle'

const Products = ({ content }) => {
    const sectionId = useId()

    const [checkedItems, setCheckedItems] = useState({})
    const [quantities, setQuantities] = useState({})
    const [total, setTotal] = useState(0)

    const [isAnnual, setIsAnnual] = useState(false)

    const isAnnualHandler = (newValue) => {
        setIsAnnual(newValue)
    }

    const calculateTotal = (checkedItems, quantities) => {
        let newTotal = 0
        let quantity = 1
        let price = 0

        content.forEach((product) => {
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

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            <Toggle isAnnual={isAnnualHandler} />
            {content.map((product) => (
                <ListItemProduct
                    key={product.id}
                    product={product}
                    isAnnual={isAnnual}
                    isChecked={checkedItems[product.id] ?? false}
                    checkHandler={(e) => checkHandler(e, product)}
                    onQuantityChange={quantityChangeHandler}
                />
            ))}
            <p>Total: {total}</p>
        </section>
    )
}

export default Products
