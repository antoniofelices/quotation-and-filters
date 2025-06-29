import { useId } from 'react'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'
import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = () => {
    const sectionId = useId()
    const { quotations } = useRequestQuotationContext()

    return (
        <section id={sectionId} className={`relative py-11`}>
            {/* <h1>{content.title}</h1> */}
            {quotations.forEach((quote) => (
                <ListItemQuotation content={quote} />
            ))}
        </section>
    )
}

export default Ongoing
