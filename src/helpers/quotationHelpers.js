const getClientData = (formData) => ({
    name: formData.get('clientname'),
    phone: formData.get('phone'),
    email: formData.get('email'),
})

const getSelectedProducts = (
    checkedItems,
    numberPages,
    numberLangs,
    products
) => {
    const filterProducts = products.filter(
        (product) => checkedItems[product.id] && product.id
    )
    const purchasedItems = filterProducts.map((product) => {
        let result = {
            name: product.title,
            id: product.id,
        }

        if (product.id === 3) {
            result = {
                ...result,
                numberOfPages: numberPages,
                numberOfLangs: numberLangs,
            }
        }

        return result
    })

    return purchasedItems
}

const createQuotation = (id, client, total, selectedProducts) => {
    const newQuotation = {
        id: id,
        products: selectedProducts,
        total: total,
        client: client,
        date: new Date().toLocaleDateString('es-ES'),
    }

    return newQuotation
}

export { getClientData, getSelectedProducts, createQuotation }
