import DefaultLayout from '@layouts/DefaultLayout'
import allData from '@/data/pages/ongoingQuotation'
import Ongoing from '@components/sections/Ongoing'
import { RequestQuotationProvider } from '@context/RequestQuotationContext'

const OngoingQuotation = () => {
    return (
        <DefaultLayout>
            <RequestQuotationProvider>
                <h1>{allData.title}</h1>
                <Ongoing />
            </RequestQuotationProvider>
        </DefaultLayout>
    )
}

export default OngoingQuotation
