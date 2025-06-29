import { createContext, useState } from 'react'

export const QuotationContext = createContext({})

export const QuotationProvider = ({ children }) => {
    const [quotations, setQuotations] = useState([])
    const allValues = {
        quotations,
        setQuotations,
    }

    return (
        <QuotationContext.Provider value={allValues}>
            {children}
        </QuotationContext.Provider>
    )
}
