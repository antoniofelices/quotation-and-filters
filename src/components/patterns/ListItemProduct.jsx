import { useState } from 'react'

const ListItemProduct = ({
    product,
    isAnnual,
    isChecked,
    checkHandler,
    onQuantityChange,
}) => {
    const [isActive, setIsActive] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const handleOpen = () => {
        setIsActive(!isActive)
    }

    const quantityHandler = (changer) => {
        let newQuantity = Math.max(1, quantity + changer)
        setQuantity(newQuantity)
        onQuantityChange(product.id, newQuantity)
    }

    const calculatePrice = (price) => {
        const result = isAnnual ? price * 12 - price * 12 * 0.2 : price
        return result
    }

    return (
        <>
            <div className="mx-8 my-4 flex items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
                <div>
                    <h2 className="text-lg font-bold text-green-900">
                        {product.title}
                    </h2>
                    <p className="text-sm">{product.text}</p>
                </div>
                <p>{calculatePrice(product.price)}</p>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={checkHandler}
                        onClick={handleOpen}
                    />
                    Add
                </label>
                {isActive === true && (
                    <div className="flex items-center justify-between">
                        <button onClick={() => quantityHandler(-1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => quantityHandler(1)}>+</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ListItemProduct
