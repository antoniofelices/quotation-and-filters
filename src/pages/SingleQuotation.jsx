import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import { useParams } from 'react-router'
import { useQuotationContext } from '@hooks/useQuotationContext'

const SingleQuotation = () => {
    const { quotations } = useQuotationContext()
    const { id } = useParams()
    const quotation = quotations.find((q) => q.id === id)

    if (!quotation) return <h1>No content buddy</h1>

    return (
        <DefaultLayout>
            <Container>
                <h1>Quotation ID: {quotation.id}</h1>
                <p>Date: {quotation.date}</p>
                <h2>Client Data</h2>
                <ul>
                    <li>{quotation.client.name}</li>
                    <li>{quotation.client.email}</li>
                </ul>
                <h2>Products</h2>
                <ul>
                    {quotation.products.map((product) => (
                        <>
                            <li>Type: {product.name}</li>
                            {product.numberOfLangs && (
                                <li>Langs: {product.numberOfLangs}</li>
                            )}
                            {product.numberOfPages && (
                                <li>Pages: {product.numberOfPages}</li>
                            )}
                        </>
                    ))}
                </ul>
                <h2>Total</h2>
                <p>{quotation.total}</p>
            </Container>
        </DefaultLayout>
    )
}

export default SingleQuotation
