const Filters = ({ query, onChange }) => {
    return (
        <div>
            <input
                value={query}
                onChange={onChange}
                className="block border border-gray-300 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <button>Order by name</button>
            <button>Order by date</button>
            <button>Reset</button>
        </div>
    )
}

export default Filters
