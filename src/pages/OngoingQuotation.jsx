import DefaultLayout from '@layouts/DefaultLayout'
import allData from '@/data/pages/ongoingQuotation'
import Ongoing from '@components/sections/Ongoing'

const OngoingQuotation = () => {
    return (
        <DefaultLayout>
            <h1>{allData.title}</h1>
            <Ongoing />
        </DefaultLayout>
    )
}

export default OngoingQuotation
