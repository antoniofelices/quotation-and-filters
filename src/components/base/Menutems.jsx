import { NavLink } from 'react-router'

const MenuItems = ({ content }) => {
    const menuData = content
        .filter((single) => single.isInMenu === true)
        .toSorted((a, b) => (a.orderMenu ?? 0) - (b.orderMenu ?? 0))

    const classesLinkElement =
        'flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'

    return (
        <>
            {menuData.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={`/${item.url}`}
                        className={({ isActive }) =>
                            `${classesLinkElement} ${
                                isActive ? 'border border-current pb-2' : ''
                            }`
                        }
                    >
                        <span>{item.text}</span>
                    </NavLink>
                </li>
            ))}
        </>
    )
}

export default MenuItems
