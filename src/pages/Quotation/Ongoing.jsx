import DefaultLayout from '@layouts/DefaultLayout'
import allData from '@/data/pages/quotation/ongoing'
import Quotations from '@components/sections/Quotations'

const OngoingQuotation = () => {
    return (
        <DefaultLayout>
            <h1>{allData.title}</h1>
            <Quotations />
        </DefaultLayout>
    )
}

export default OngoingQuotation
