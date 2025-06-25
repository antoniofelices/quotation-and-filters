const ListItemProduct = ({ content }) => {
    return (
        <div className="mx-8 flex items-center justify-between gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            <div>
                <h2 className="text-lg font-bold text-green-900">
                    {content.title}
                </h2>
                <p className="text-sm">{content.text}</p>
            </div>
            <p>{content.price}</p>
            <label>
                <input type="checkbox" value="" />
                Add
            </label>
        </div>
    )
}

export default ListItemProduct
