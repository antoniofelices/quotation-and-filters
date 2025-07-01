import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import Ongoing from '@components/sections/Ongoing'
import SearchFilter from '@components/patterns/SearchFilter'
import OrderBySelect from '@components/patterns/OrderBySelect'
import Hero from '@components/sections/Hero'
import { useOngoingQuotationContext } from '@hooks/useOngoingQuotationContext'

const OngoingQuotation = () => {
    const {
        query,
        handleQuery,
        handleSortBy,
        filteredAndSortedQuotations,
        textStrings,
    } = useOngoingQuotationContext()

    return (
        <DefaultLayout>
            <Container>
                <Hero title={textStrings.title} />
                <SearchFilter
                    query={query}
                    onChange={handleQuery}
                    label={textStrings.textSearchFilter}
                />
                <OrderBySelect
                    handleSortBy={handleSortBy}
                    content={textStrings.orderBy}
                />
                <Ongoing
                    items={filteredAndSortedQuotations}
                    content={textStrings.ongoing}
                />
            </Container>
        </DefaultLayout>
    )
}

export default OngoingQuotation
