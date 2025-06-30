import { useId } from 'react'

const OrderBySelect = ({ handleSortBy }) => {
    const labelId = useId()

    return (
        <>
            <label htmlFor={labelId} className="sr-only">
                Order By
            </label>
            <select onChange={handleSortBy}>
                <option value="default">Order default</option>
                <option value="name">Order by client's name</option>
                <option value="date">Order by date</option>
                <option value="total">Order by total amount</option>
            </select>
        </>
    )
}

export default OrderBySelect
