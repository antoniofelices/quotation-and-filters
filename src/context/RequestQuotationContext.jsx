import { createContext, useState } from 'react'
import products from '@data/products'

export const RequestQuotationContext = createContext({})

export const RequestQuotationProvider = ({ children }) => {
    const [idQuotation, setIdQuotation] = useState(1)
    const [isAnnual, setIsAnnual] = useState(false)
    const [checkedItems, setCheckedItems] = useState({})
    const [total, setTotal] = useState(0)

    const [numberPages, setNumberPages] = useState(1)
    const [numberLangs, setNumberLangs] = useState(1)

    const [quotations, setQuotations] = useState([])

    const calculateTotal = (checkedItems, pages, langs) => {
        let newTotal = 0
        let addOns = 0
        let price = 0
        let quantityAddOns = pages + langs

        products.forEach((product) => {
            if (checkedItems[product.id]) {
                price = isAnnual
                    ? product.price * 12 - product.price * 12 * 0.2
                    : product.price
                addOns = product.id === 3 ? quantityAddOns * 30 : 0
                newTotal += price + addOns
            }
        })
        setTotal(newTotal)
    }

    const isAnnualHandler = (newValue) => {
        setIsAnnual(newValue)
    }

    const numberPagesHandler = (changer) => {
        let newQuantityPages = Math.max(1, numberPages + changer)
        setNumberPages(newQuantityPages)
        calculateTotal(checkedItems, newQuantityPages, numberLangs)
    }

    const numberLangsHandler = (changer) => {
        let newQuantityLangs = Math.max(1, numberLangs + changer)
        setNumberLangs(newQuantityLangs)
        calculateTotal(checkedItems, numberPages, newQuantityLangs)
    }

    const checkHandler = (e, product) => {
        const isChecked = e.target.checked
        const updatedChecked = {
            ...checkedItems,
            [product.id]: isChecked,
        }
        setCheckedItems(updatedChecked)
        setTotal(
            (prevState) =>
                prevState + (isChecked ? product.price : -product.price)
        )
        calculateTotal(updatedChecked, numberPages, numberLangs)
    }

    const summaryHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const clientName = formData.get('clientname')
        const phone = formData.get('phone')
        const email = formData.get('email')

        const filterProducts = products.filter(
            (product) => checkedItems[product.id] && product.id
        )

        const purchasedItems = filterProducts.map((product) => {
            let result = {
                name: `${product.title}`,
                id: `${product.id}`,
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

        const newQuotation = {
            id: idQuotation,
            products: purchasedItems,
            total: total,
            client: {
                name: clientName,
                phone: phone,
                email: email,
            },
            date: new Date().toLocaleDateString(),
        }

        setQuotations((prevState) => {
            const newSummary = [...prevState, newQuotation]
            console.log(newSummary)
            return newSummary
        })

        setIdQuotation(idQuotation + 1)

        setCheckedItems({})
        setTotal(0)
        setIsAnnual(false)
    }

    const allValues = {
        products,
        isAnnual,
        isAnnualHandler,
        checkedItems,
        total,
        checkHandler,
        numberPages,
        numberLangs,
        numberPagesHandler,
        numberLangsHandler,
        quotations,
        summaryHandler,
    }

    return (
        <RequestQuotationContext.Provider value={allValues}>
            {children}
        </RequestQuotationContext.Provider>
    )
}
