import { createContext, useState } from 'react'

export const OngoingQuotationContext = createContext({})

export const OngoingQuotationProvider = ({ children }) => {
    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const allValues = { query, handleQuery }

    return (
        <OngoingQuotationContext.Provider value={allValues}>
            {children}
        </OngoingQuotationContext.Provider>
    )
}
