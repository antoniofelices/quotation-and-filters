import DefaultLayout from '@layouts/DefaultLayout'
import Products from '@components/sections/Products'
import Container from '@components/base/Container'
import FormQuotation from '@components/patterns/FormQuotation'
import products from '@data/products'
import allData from '@data/pages/requestQuotation'
import formQuotation from '@data/formQuotation'

const RequestQuotation = () => {
    return (
        <DefaultLayout>
            <Container>
                <h1>{allData.title}</h1>
                <Products content={products} />
                <FormQuotation content={formQuotation} />
            </Container>
        </DefaultLayout>
    )
}

export default RequestQuotation
