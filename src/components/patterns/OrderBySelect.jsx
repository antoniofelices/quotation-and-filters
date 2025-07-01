import { useId } from 'react'

const OrderBySelect = ({ handleSortBy, content }) => {
    const labelId = useId()

    return (
        <>
            <label
                htmlFor={labelId}
                className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {content.label}
            </label>
            <select
                onChange={handleSortBy}
                className="bg-gray-100 border border-gray-900 text-gray-900 text-sm font-bold rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>{content.default}</option>
                <option value="name">{content.name}</option>
                <option value="date">{content.date}</option>
                <option value="total">{content.total}</option>
            </select>
        </>
    )
}

export default OrderBySelect
