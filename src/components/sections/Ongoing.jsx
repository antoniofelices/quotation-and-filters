import { useId } from 'react'
import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = ({ items }) => {
    const sectionId = useId()

    return (
        <section id={sectionId} className={`relative py-11`}>
            {items.length > 0 ? (
                <>
                    {items.map((quote) => (
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
