import { createContext, useState } from 'react'

export const QuotationContext = createContext({})

export const QuotationProvider = ({ children }) => {
    const [isAnnual, setIsAnnual] = useState(false)

    const isAnnualHandler = (newValue) => {
        setIsAnnual(newValue)
    }

    const allValues = {
        isAnnual,
        isAnnualHandler,
    }

    return (
        <QuotationContext.Provider value={allValues}>
            {children}
        </QuotationContext.Provider>
    )
}
