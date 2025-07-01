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
            <p>
                {textStrings.textTotal}: {total}
            </p>
        </>
    )
}

export default Request
