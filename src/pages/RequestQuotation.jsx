import DefaultLayout from '@layouts/DefaultLayout'
import Request from '@components/sections/Request'
import Container from '@components/base/Container'
import FormQuotation from '@components/patterns/FormQuotation'
import allData from '@data/pages/requestQuotation'
import formQuotation from '@data/formQuotation'
import { RequestQuotationProvider } from '@context/RequestQuotationContext'

const RequestQuotation = () => {
    return (
        <DefaultLayout>
            <Container>
                <RequestQuotationProvider>
                    <h1>{allData.title}</h1>
                    <Request />
                    <FormQuotation content={formQuotation} />
                </RequestQuotationProvider>
            </Container>
        </DefaultLayout>
    )
}

export default RequestQuotation
