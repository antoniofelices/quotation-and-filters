import { Fragment } from 'react'

import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import content from '@/data/pages/singleQuotation'
import { useParams } from 'react-router'
import { useQuotationContext } from '@hooks/useQuotationContext'

const SingleQuotation = () => {
    const { quotations } = useQuotationContext()
    const { id } = useParams()
    const quotation = quotations.find((q) => q.id === id)

    if (!quotation) return <h1>{content.noContent}</h1>

    return (
        <DefaultLayout>
            <Container>
                <h1>
                    {content.title}: {quotation.id}
                </h1>
                <p>
                    {content.date}: {quotation.date}
                </p>
                <h2>{content.subtitleClient}</h2>
                <ul>
                    <li>{quotation.client.name}</li>
                    <li>{quotation.client.email}</li>
                </ul>
                <h2>{content.subtitleProducts}</h2>
                <ul>
                    {quotation.products.map((product) => (
                        <Fragment key={product.id}>
                            <li>
                                {content.type}: {product.name}
                            </li>
                            {product.numberOfLangs && (
                                <li>
                                    {content.numberOfLangs}:{' '}
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
                <h2>{content.subtitleTotal}</h2>
                <p>{quotation.total}</p>
            </Container>
        </DefaultLayout>
    )
}

export default SingleQuotation
