const Toggle = ({ isAnnual }) => {
    const handlerIsActive = (e) => {
        isAnnual(e.target.checked)
    }

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={handlerIsActive}
            />
            <div className="relative w-8 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-green-700 dark:peer-focus:ring-green-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-700 dark:peer-checked:bg-green-700"></div>
            <span className="ms-3 text-sm font-medium">Annual Cost</span>
        </label>
    )
}

export default Toggle
