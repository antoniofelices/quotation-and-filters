import { useContext } from 'react'
import { QuotationContext } from '@context/QuotationContext'

export const useQuotationContext = () => {
    const context = useContext(QuotationContext)
    if (!context) {
        throw new Error(
            'QuotationContext have to be use inside QuotationProvider'
        )
    }
    return context
}
