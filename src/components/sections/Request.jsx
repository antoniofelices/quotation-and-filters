import { useId } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'
import Toggle from '@components/base/Toggle'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const Request = () => {
    const sectionId = useId()

    const { products, isAnnualHandler, checkedItems, total, checkHandler } =
        useRequestQuotationContext()

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            <Toggle isAnnual={isAnnualHandler} />
            {products.map((product) => (
                <ListItemProduct
                    key={product.id}
                    product={product}
                    isChecked={checkedItems[product.id] ?? false}
                    checkHandler={(e) => checkHandler(e, product)}
                />
            ))}
            <p>Total: {total}</p>
        </section>
    )
}

export default Request
