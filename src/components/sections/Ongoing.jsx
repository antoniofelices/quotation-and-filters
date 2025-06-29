import { useId } from 'react'
import { useQuotationContext } from '@hooks/useQuotationContext'
import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = () => {
    const sectionId = useId()
    const { quotations } = useQuotationContext()

    console.log('Ongoing render - quotations:', quotations)

    return (
        <section id={sectionId} className={`relative py-11`}>
            {/* <h1>{content.title}</h1> */}
            {quotations.length > 0 ? (
                <>
                    {quotations.map((quote) => (
                        <ListItemQuotation key={quote.id} content={quote} />
                    ))}
                </>
            ) : (
                <>
                    <h1>No content yet</h1>
                </>
            )}
        </section>
    )
}

export default Ongoing
