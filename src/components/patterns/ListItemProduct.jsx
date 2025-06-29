// import { useState } from 'react'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const ListItemProduct = ({ product, isChecked, checkHandler }) => {
    const {
        isAnnual,
        checkedItems,
        numberPages,
        numberLangs,
        numberPagesHandler,
        numberLangsHandler,
    } = useRequestQuotationContext()

    const calculatePrice = (price) => {
        const result = isAnnual ? price - price * 0.2 : price
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
                {isAnnual === true && <p>20% discount</p>}
                <p>{calculatePrice(product.price)}</p>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={checkHandler}
                    />
                    Add
                </label>
            </div>
            {product.id === 3 && checkedItems[product.id] && (
                <>
                    <p>Pages</p>
                    <div className="flex items-center flex-start">
                        <button onClick={() => numberPagesHandler(-1)}>
                            -
                        </button>
                        <p>{numberPages}</p>
                        <button onClick={() => numberPagesHandler(1)}>+</button>
                    </div>
                    <p>Langs</p>
                    <div className="flex items-center flex-start">
                        <button onClick={() => numberLangsHandler(-1)}>
                            -
                        </button>
                        <p>{numberLangs}</p>
                        <button onClick={() => numberLangsHandler(1)}>+</button>
                    </div>
                </>
            )}
        </>
    )
}

export default ListItemProduct
