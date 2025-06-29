import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import allData from '@/data/pages/ongoingQuotation'
import Ongoing from '@components/sections/Ongoing'

const OngoingQuotation = () => {
    return (
        <DefaultLayout>
            <Container>
                <h1>{allData.title}</h1>
                <Ongoing />
            </Container>
        </DefaultLayout>
    )
}

export default OngoingQuotation
