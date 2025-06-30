import { useContext } from 'react'
import { RequestQuotationContext } from '@context/RequestQuotationContext'

export const useRequestQuotationContext = () => {
    const context = useContext(RequestQuotationContext)
    if (!context) {
        throw new Error(
            'QuotationContext have to be use inside QuotationProvider'
        )
    }
    return context
}
