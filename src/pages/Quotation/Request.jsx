import DefaultLayout from '@layouts/DefaultLayout'
import Products from '@components/sections/Products'
import FormQuotation from '@components/patterns/FormQuotation'
import products from '@data/products'
import allData from '@data/pages/quotation/request'

const RequestQuotation = () => {
    return (
        <DefaultLayout>
            <h1>{allData.title}</h1>
            <Products content={products} />
            <FormQuotation />
        </DefaultLayout>
    )
}

export default RequestQuotation
