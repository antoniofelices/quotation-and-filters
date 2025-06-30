import { useContext } from 'react'
import { OngoingQuotationContext } from '@context/OngoingQuotationContext'

export const useOngoingQuotationContext = () => {
    const context = useContext(OngoingQuotationContext)
    if (!context) {
        throw new Error(
            'OngoingQuotationContext have to be use inside OngoingQuotationProvider'
        )
    }
    return context
}
