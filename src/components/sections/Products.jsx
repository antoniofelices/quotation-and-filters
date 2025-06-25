import { useId, useState } from 'react'
import ListItemProduct from '@components/patterns/ListItemProduct'

const Products = ({ content }) => {
    const sectionId = useId()
    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [total, setTotal] = useState(0)

    const checkHandler1 = (e) => {
        setIsChecked1(e.target.checked)
        setTotal(
            (prevState) =>
                prevState +
                (e.target.checked ? content[0].price : -content[0].price)
        )
    }

    const checkHandler2 = (e) => {
        setIsChecked2(e.target.checked)
        setTotal(
            (prevState) =>
                prevState +
                (e.target.checked ? content[1].price : -content[1].price)
        )
    }

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            {/* {content.map((product) => (
                <ListItemProduct key={product.id} content={product} />
            ))} */}

            <div>
                <h2 className="text-lg font-bold text-green-900">
                    {content.title}
                </h2>
                <p className="text-sm">{content[0].text}</p>
            </div>
            <p>{content[0].price}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={checkHandler1}
                />
                Add
            </label>

            <div>
                <h2 className="text-lg font-bold text-green-900">
                    {content.title}
                </h2>
                <p className="text-sm">{content[1].text}</p>
            </div>
            <p>{content[1].price}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={checkHandler2}
                />
                Add
            </label>

            <p>Total: {total}</p>
        </section>
    )
}

export default Products
