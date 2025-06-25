import { NavLink } from 'react-router'

const MenuItems = ({ content }) => {
    const menuData = content
        .filter((single) => single.isInMenu === true)
        .toSorted((a, b) => (a.orderMenu ?? 0) - (b.orderMenu ?? 0))

    return (
        <>
            {menuData.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={`/${item.url}`}
                        className={({ isActive }) =>
                            `${isActive ? 'border-b border-current pb-2' : ''}`
                        }
                    >
                        {item.text}
                    </NavLink>
                </li>
            ))}
        </>
    )
}

export default MenuItems
