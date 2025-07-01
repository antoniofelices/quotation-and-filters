import ListItemProduct from '@components/patterns/ListItemProduct'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const Request = () => {
    const { products, checkedItems, textStrings, total, checkHandler } =
        useRequestQuotationContext()

    return (
        <>
            {products.map((product) => (
                <ListItemProduct
                    key={product.id}
                    product={product}
                    isChecked={checkedItems[product.id] ?? false}
                    checkHandler={(e) => checkHandler(e, product)}
                    content={textStrings.listProduct}
                />
            ))}
            <p className="text-gray-900 font-bold dark:text-white py-6 text-3xl">
                {textStrings.textTotal}: {total}.00 €
            </p>
        </>
    )
}

export default Request
