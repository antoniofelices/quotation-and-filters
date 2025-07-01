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
        <Container>
            <Hero title={textStrings.title} />
            <div className="flex py-4 w-xl gap-4">
                <SearchFilter
                    query={query}
                    onChange={handleQuery}
                    label={textStrings.textSearchFilter}
                />
                <OrderBySelect
                    handleSortBy={handleSortBy}
                    content={textStrings.orderBy}
                />
            </div>
            <Ongoing
                items={filteredAndSortedQuotations}
                content={textStrings.ongoing}
            />
        </Container>
    )
}

export default OngoingQuotation
