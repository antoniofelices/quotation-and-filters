import { useId } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'
import Toggle from '@components/base/Toggle'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const Request = () => {
    const sectionId = useId()

    const {
        products,
        isAnnual,
        isAnnualHandler,
        checkedItems,
        total,
        checkHandler,
        quantityChangeHandler,
    } = useRequestQuotationContext()

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            <Toggle isAnnual={isAnnualHandler} />
            {products.map((product) => (
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

export default Request
