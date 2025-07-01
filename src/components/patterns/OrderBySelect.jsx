import { useId } from 'react'

const OrderBySelect = ({ handleSortBy, content }) => {
    const labelId = useId()

    return (
        <>
            <label htmlFor={labelId} className="sr-only">
                {content.label}
            </label>
            <select onChange={handleSortBy}>
                <option value="default">{content.default}</option>
                <option value="name">{content.name}</option>
                <option value="date">{content.date}</option>
                <option value="total">{content.total}</option>
            </select>
        </>
    )
}

export default OrderBySelect
