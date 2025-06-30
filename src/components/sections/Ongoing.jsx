import { useId } from 'react'
import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = ({ items }) => {
    const sectionId = useId()

    if (items.length === 0) return <h1>No content yet</h1>

    return (
        <section id={sectionId} className={`relative py-11`}>
            <table>
                <thead>
                    <tr>
                        <th>Quotation ID</th>
                        <th>Quotation Date</th>
                        <th>Client Name</th>
                        <th>Client Phone</th>
                        <th>Client Mail</th>
                        <th>Quotation Total</th>
                        <th>Product</th>
                        <th>Number Pages (just web product)</th>
                        <th>Number Langs (just web product)</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((quote) => (
                        <ListItemQuotation content={quote} key={quote.id} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Ongoing
