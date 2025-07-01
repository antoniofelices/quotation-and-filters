import Request from '@components/sections/Request'
import Container from '@components/base/Container'
import FormQuotation from '@components/patterns/FormQuotation'
import Toggle from '@components/base/Toggle'
import Hero from '@components/sections/Hero'
import { ToastContainer } from 'react-toastify'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const RequestQuotation = () => {
    const { isAnnualHandler, textStrings } = useRequestQuotationContext()
    return (
        <Container>
            <Hero title={textStrings.title} />
            <Toggle
                isAnnual={isAnnualHandler}
                content={textStrings.textToggleAnnual}
            />
            <Request />
            <FormQuotation content={textStrings.form} />
            <ToastContainer position="bottom-right" />
        </Container>
    )
}

export default RequestQuotation
