import { useId, useState } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'

const Products = ({ content }) => {
    const sectionId = useId()
    const [isChecked, setIsChecked] = useState(false)
    const [total, setTotal] = useState(0)

    const getTotal = (e, price) => {
        setIsChecked(e.target.checked)
        setTotal((prevState) => prevState + (e.target.checked ? price : -price))
    }

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            {content.map((product) => (
                <ListItemProduct
                    key={product.id}
                    content={product}
                    checked={isChecked}
                    checkHandler={(e) => getTotal(e, product.price)}
                />
            ))}
            <p>Total: {total}</p>
        </section>
    )
}

export default Products
