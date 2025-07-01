import { useId } from 'react'

const SearchFilter = ({ query, onChange, label }) => {
    const labelId = useId()

    return (
        <>
            <label htmlFor={labelId} className="sr-only">
                {label}
            </label>
            <input
                value={query}
                onChange={onChange}
                placeholder="Search by name"
                className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400 border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
            />
        </>
    )
}

export default SearchFilter
