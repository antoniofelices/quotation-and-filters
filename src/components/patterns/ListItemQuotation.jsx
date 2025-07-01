import { Fragment } from 'react'
import { Link } from 'react-router'
import routesData from '@/data/routesData'

const ListItemQuotation = ({ content }) => {
    const products = content.products

    const [, , quotation] = routesData
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {' '}
                    <Link to={`/${quotation.url}/${content.id}`}>
                        {content.id}
                    </Link>
                </td>
                <td className="px-6 py-4">{content.date}</td>
                <td className="px-6 py-4">{content.client.name}</td>
                <td className="px-6 py-4">{content.client.phone}</td>
                <td className="px-6 py-4">{content.client.email}</td>
                <td className="px-6 py-4">{content.total}</td>
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
