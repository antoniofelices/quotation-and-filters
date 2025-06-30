import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import allData from '@/data/pages/ongoingQuotation'
import Ongoing from '@components/sections/Ongoing'
import SearchFilter from '@components/patterns/SearchFilter'
import OrderBySelect from '@components/patterns/OrderBySelect'
import { useOngoingQuotationContext } from '@hooks/useOngoingQuotationContext'

const OngoingQuotation = () => {
    const { query, handleQuery, handleSortBy, filteredAndSortedQuotations } =
        useOngoingQuotationContext()

    return (
        <DefaultLayout>
            <Container>
                <h1>{allData.title}</h1>
                <SearchFilter query={query} onChange={handleQuery} />
                <OrderBySelect handleSortBy={handleSortBy} />
                <Ongoing items={filteredAndSortedQuotations} />
            </Container>
        </DefaultLayout>
    )
}

export default OngoingQuotation
