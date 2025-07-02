import ListItemQuotation from '@components/patterns/ListItemQuotation'

const Ongoing = ({ items, content }) => {
    if (items.length === 0)
        return (
            <h1 className="text-gray-900 dark:text-white">
                {content.noContent}
            </h1>
        )

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"></th>
                        <th scope="col" className="px-6 py-3">
                            {content.date}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {content.name}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {content.phone}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {content.email}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {content.total}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {content.products}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((quote) => (
                        <ListItemQuotation
                            quote={quote}
                            key={quote.id}
                            content={content.edit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ongoing
