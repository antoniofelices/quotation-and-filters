import { useId } from 'react'

const SearchFilter = ({ query, onChange }) => {
    const labelId = useId()

    return (
        <>
            <label htmlFor={labelId} className="sr-only">
                Search input
            </label>
            <input
                value={query}
                onChange={onChange}
                className="block border border-gray-300 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
        </>
    )
}

export default SearchFilter
