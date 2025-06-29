import { useState, useId } from 'react'
import Button from '@components/base/Button'
// import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const FormQuotation = ({ content }) => {
    const userNameId = useId()
    const phoneId = useId()
    const emailId = useId()

    const [summary, setSummary] = useState([])

    // const [totalQuotations, setTotalQuotations] = useState({})

    // const { products, checkedItems, total, quantities } =
    //     useRequestQuotationContext()

    const summaryHandler = (formData) => {
        // Recibe checkedItems objeto { 1: true, 2: false, 3: true }
        // Recibe quantities objeto { 1:3, 2:0, 3, 1}
        // Recibe el total, coste total
        // Genera un summary, convierte el objeto checkedItems

        // const productsCheckeds = products.filter(
        //     (product) => checkedItems[product.id]
        // )

        const clientName = formData.get('client-name')
        const phone = formData.get('phone')
        const email = formData.get('email')

        const Order = {
            id: 1,
            title: 'Seo',
            text: 'Aliquam congue eget tortor vel lobortis. Sed ultrices enim mattis sapien.',
            price: 300,
            client: {
                name: clientName,
                phone: phone,
                email: email,
            },
            date: new Date().toLocaleDateString(),
        }

        setSummary((prevState) => [...prevState, Order])
        console.log(summary)
    }

    return (
        <form action={summaryHandler}>
            <div className="grid gap-4 lg:grid-cols-12 lg:justify-items-start">
                <div className="relative w-full lg:col-span-4">
                    <label htmlFor={emailId} className="sr-only">
                        {content.labelUserName}
                    </label>
                    <input
                        type="text"
                        name="client-name"
                        id={userNameId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-green-900 invalid:border-2 invalid:border-red focus:outline-none"
                        placeholder={content.labelUserName}
                        // required
                    />
                </div>

                <div className="relative w-full lg:col-span-4">
                    <label htmlFor={phoneId} className="sr-only">
                        {content.labelPhone}
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id={phoneId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-green-900 invalid:border-2 invalid:border-red focus:outline-none"
                        placeholder={content.labelPhone}
                        // required
                    />
                </div>
                <div className="relative w-full lg:col-span-4">
                    <label htmlFor={emailId} className="sr-only">
                        {content.labelEmail}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={emailId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold text-green-900 placeholder-blue-900 invalid:border-2 invalid:border-red focus:outline-none"
                        placeholder={content.labelEmail}
                        // required
                    />
                    <p className="message-error absolute top-[2.5rem] left-0 hidden w-full bg-red px-2 text-left text-sm text-white">
                        {content.textError}
                    </p>
                </div>
                <Button
                    type="submit"
                    classes={`w-full lg:col-span-2`}
                    text={content.textButton}
                    variant="red"
                />
            </div>
        </form>
    )
}

export default FormQuotation
