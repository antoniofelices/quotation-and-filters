import { Fragment } from 'react'
import { Link } from 'react-router'
import routesData from '@/data/routesData'

const ListItemQuotation = ({ quote, content }) => {
    const products = quote.products

    const [, , quotation] = routesData
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {' '}
                    <Link to={`/${quotation.url}/${quote.id}`}>{content}</Link>
                </td>
                <td className="px-6 py-4">{quote.date}</td>
                <td className="px-6 py-4">{quote.client.name}</td>
                <td className="px-6 py-4">{quote.client.phone}</td>
                <td className="px-6 py-4">{quote.client.email}</td>
                <td className="px-6 py-4">{quote.total}</td>
                <td className="px-6 py-4">
                    {products.map((product) => (
                        <Fragment key={product.id}>
                            <span>
                                {product.name}
                                <br />
                                {product.numberOfPages > 0 && (
                                    <span>
                                        - Pages: {product.numberOfPages}
                                    </span>
                                )}
                                <br />
                                {product.numberOfLangs > 0 && (
                                    <span>
                                        - Langs: {product.numberOfLangs}
                                    </span>
                                )}
                            </span>
                        </Fragment>
                    ))}
                </td>
            </tr>
        </>
    )
}

export default ListItemQuotation
