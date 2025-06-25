import { useId } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'

const Products = ({ content }) => {
    const sectionId = useId()

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            <h1>{content.title}</h1>
            {content.forEach((product) => (
                <ListItemProduct key={product.id} content={product} />
            ))}
            <p>Total Price</p>
        </section>
    )
}

export default Products
