import { createContext, useMemo, useState } from 'react'
import { useQuotationContext } from '@hooks/useQuotationContext'
import textStrings from '@data/pages/ongoingQuotation'

export const OngoingQuotationContext = createContext({})

export const OngoingQuotationProvider = ({ children }) => {
    const { quotations } = useQuotationContext()
    const [query, setQuery] = useState('')
    const [sortBy, setSortBy] = useState('')

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const filteredAndSortedQuotations = useMemo(() => {
        const lowerCaseQuery = query.toLowerCase()

        const filtered = quotations.filter((item) =>
            item.client.name.toLowerCase().includes(lowerCaseQuery)
        )

        return filtered.toSorted((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.client.name.localeCompare(b.client.name)
                case 'date':
                    return a.date.localeCompare(b.date)
                case 'total':
                    return b.total - a.total
                default:
                    return 0
            }
        })
    }, [quotations, query, sortBy])

    const allValues = {
        query,
        handleQuery,
        handleSortBy,
        sortBy,
        setSortBy,
        filteredAndSortedQuotations,
        textStrings,
    }

    return (
        <OngoingQuotationContext.Provider value={allValues}>
            {children}
        </OngoingQuotationContext.Provider>
    )
}
