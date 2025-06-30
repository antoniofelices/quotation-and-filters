const filterItems = (items, query) => {
    query = query.toLowerCase()
    return items.filter((item) =>
        item.client.name
            .split(' ')
            .some((word) => word.toLowerCase().startsWith(query))
    )
}

export { filterItems }
