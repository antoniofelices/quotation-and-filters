import { Fragment } from 'react'
import Container from '@components/base/Container'
import content from '@/data/pages/singleQuotation'
import { useParams } from 'react-router'
import { useQuotationContext } from '@hooks/useQuotationContext'

const SingleQuotation = () => {
    const { quotations } = useQuotationContext()
    const { id } = useParams()
    const quotation = quotations.find((q) => q.id === id)
    if (!quotation)
        return (
            <h1 className="text-gray-900 dark:text-white">
                {content.noContent}
            </h1>
        )

    return (
        <Container>
            <div className="text-gray-900 dark:text-white">
                <div className="flex justify-between">
                    <div>
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            {quotation.client.name}
                        </h1>
                        <ul>
                            <li>
                                {content.clientPhone}: {quotation.client.phone}
                            </li>
                            <li>
                                {content.clientEmail}: {quotation.client.email}
                            </li>
                        </ul>
                    </div>
                    <p className="text-xl font-bold">
                        {content.date}: {quotation.date}
                    </p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <h2 className="text-2xl font-bold mb-2">
                    {content.subtitleProducts}
                </h2>
                <ul>
                    {quotation.products.map((product) => (
                        <Fragment key={product.id}>
                            <li>
                                {content.type}: {product.name}
                            </li>
                            {product.numberOfLangs && (
                                <li>
                                    {content.numberLangs}:{' '}
                                    {product.numberOfLangs}
                                </li>
                            )}
                            {product.numberOfPages && (
                                <li>
                                    {content.numberPages}:{' '}
                                    {product.numberOfPages}
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <h2 className="text-2xl font-bold mb-2">
                    {content.subtitleTotal}
                </h2>
                <p>{quotation.total}.00€</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                {content.title}: {quotation.id}
            </div>
        </Container>
    )
}

export default SingleQuotation
