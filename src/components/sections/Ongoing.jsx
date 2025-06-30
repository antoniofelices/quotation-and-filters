import { useId } from 'react'
import ListItemQuotation from '@components/patterns/ListItemQuotation'
import { Link } from 'react-router'
import routesData from '@/data/routesData'

const Ongoing = ({ items }) => {
    const sectionId = useId()
    const [, , quotation] = routesData

    if (items.length === 0) return <h1>No content yet</h1>

    return (
        <section id={sectionId} className={`relative py-11`}>
            <>
                {items.map((quote) => (
                    <Link to={`/${quotation.url}/${quote.id}`} key={quote.id}>
                        <ListItemQuotation content={quote} />
                    </Link>
                ))}
            </>
        </section>
    )
}

export default Ongoing
