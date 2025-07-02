import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { useQuotationContext } from '@hooks/useQuotationContext'
import { useCalculateTotal } from '@hooks/useCalculateTotal'
import textStrings from '@data/pages/requestQuotation'
import products from '@data/products'

export const RequestQuotationContext = createContext({})

export const RequestQuotationProvider = ({ children }) => {
    const { quotations, setQuotations } = useQuotationContext()

    const [isAnnual, setIsAnnual] = useState(false)
    const [checkedItems, setCheckedItems] = useState({})
    const [total, setTotal] = useState(0)

    const [numberPages, setNumberPages] = useState(1)
    const [numberLangs, setNumberLangs] = useState(1)

    const notify = () => toast('Saved!')

    const totalCalculated = useCalculateTotal(
        isAnnual,
        checkedItems,
        numberLangs,
        numberPages,
        products
    )

    useEffect(() => {
        setTotal(totalCalculated)
    }, [totalCalculated])

    const isAnnualHandler = (newValue) => {
        setIsAnnual(newValue)
    }

    const numberPagesHandler = (changer) => {
        let newQuantityPages = Math.max(1, numberPages + changer)
        setNumberPages(newQuantityPages)
    }

    const numberLangsHandler = (changer) => {
        let newQuantityLangs = Math.max(1, numberLangs + changer)
        setNumberLangs(newQuantityLangs)
    }

    const checkHandler = (e, product) => {
        const isChecked = e.target.checked
        const updatedChecked = {
            ...checkedItems,
            [product.id]: isChecked,
        }
        setCheckedItems(updatedChecked)
    }

    const getClientData = (formData) => ({
        name: formData.get('clientname'),
        phone: formData.get('phone'),
        email: formData.get('email'),
    })

    const getSelectedProducts = () => {
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

    const createQuotation = (client, selectedProducts) => {
        const newQuotation = {
            id: uuidv4(),
            products: selectedProducts,
            total: total,
            client: client,
            date: new Date().toLocaleDateString('es-ES'),
        }

        return newQuotation
    }

    const resetForm = (form) => {
        setCheckedItems({})
        setNumberPages(1)
        setNumberLangs(1)
        setTotal(0)
        setIsAnnual(false)
        form.reset()
    }

    const summaryHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const client = getClientData(formData)
        const selectedProducts = getSelectedProducts()
        const newQuotation = createQuotation(client, selectedProducts)

        setQuotations((prevState) => {
            const newSummary = [...prevState, newQuotation]
            console.log(newSummary)
            return newSummary
        })
        // setQuotations((prevState) => [...prevState, newQuotation])

        notify()
        resetForm(e.target)
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
        textStrings,
    }

    return (
        <RequestQuotationContext.Provider value={allValues}>
            {children}
        </RequestQuotationContext.Provider>
    )
}
