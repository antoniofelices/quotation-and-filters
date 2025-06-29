const ListItemQuotation = ({ content }) => {
    const products = content.products
    return (
        <div className="mx-8 flex items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            <div>
                <h3>Client Data</h3>
                <ul>
                    <li>{content.client.name}</li>
                    <li>{content.client.phone}</li>
                    <li>{content.client.mail}</li>
                </ul>
            </div>
            <div>
                <h3>Demanded</h3>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </div>
            <div>
                <h3>Total Price</h3>
                <p>{content.total}</p>
            </div>
        </div>
    )
}

export default ListItemQuotation
