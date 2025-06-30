import { Fragment } from 'react'
import { Link } from 'react-router'
import routesData from '@/data/routesData'

const ListItemQuotation = ({ content }) => {
    const products = content.products

    const [, , quotation] = routesData
    return (
        <>
            <tr className="">
                <td>
                    {' '}
                    <Link to={`/${quotation.url}/${content.id}`}>
                        {content.id}
                    </Link>
                </td>
                <td>{content.date}</td>
                <td>{content.client.name}</td>
                <td>{content.client.phone}</td>
                <td>{content.client.mail}</td>
                <td>{content.total}</td>
                {products.map((product) => (
                    <Fragment key={product.id}>
                        <td>{product.name}</td>
                        {product.numberOfPages && (
                            <td>{product.numberOfPages}</td>
                        )}
                        {product.numberOfLangs && (
                            <td>{product.numberOfLangs}</td>
                        )}
                    </Fragment>
                ))}
            </tr>
        </>
    )
}

export default ListItemQuotation
