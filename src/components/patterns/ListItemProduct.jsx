import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'
import { useId } from 'react'

const ListItemProduct = ({ product, isChecked, checkHandler, content }) => {
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

    const addId = useId()

    return (
        <div className="mx-8 my-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white lg:p-10 shadow-lg lg:mx-0">
            <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-sm">{product.text}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        {isAnnual === true && <p>{content.discount}</p>}
                        <p className="text-lg font-bold">
                            {calculatePrice(product.price)}.00€
                        </p>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={addId}
                            type="checkbox"
                            checked={isChecked}
                            onChange={checkHandler}
                            className="w-4 h-4 text-green-700 dark:text-white  bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-sm focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {content.textAdd}
                        </label>
                    </div>
                </div>
            </div>

            {product.id === 3 && checkedItems[product.id] && (
                <div className="flex justify-end py-4">
                    <div className="flex flex-col">
                        <div className="flex items-center flex-start gap-4">
                            <p>{content.numberPages}</p>
                            <button onClick={() => numberPagesHandler(-1)}>
                                -
                            </button>
                            <p>{numberPages}</p>
                            <button onClick={() => numberPagesHandler(1)}>
                                +
                            </button>
                        </div>
                        <div className="flex items-center flex-start gap-4">
                            <p>{content.numberLangs}</p>
                            <button onClick={() => numberLangsHandler(-1)}>
                                -
                            </button>
                            <p>{numberLangs}</p>
                            <button onClick={() => numberLangsHandler(1)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListItemProduct
