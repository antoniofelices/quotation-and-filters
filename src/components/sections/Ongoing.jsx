import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = ({ items, content }) => {
    if (items.length === 0) return <h1>{content.noContent}</h1>

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>{content.id}</th>
                        <th>{content.date}</th>
                        <th>{content.name}</th>
                        <th>{content.phone}</th>
                        <th>{content.email}</th>
                        <th>{content.total}</th>
                        <th>{content.products}</th>
                        <th>{content.numberPages}</th>
                        <th>{content.numberLangs}</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((quote) => (
                        <ListItemQuotation content={quote} key={quote.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Ongoing
