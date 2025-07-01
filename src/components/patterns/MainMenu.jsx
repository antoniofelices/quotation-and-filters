import MenuItems from '@/components/base/Menutems'
import mainMenuData from '@/data/routesData'

const MainMenu = () => {
    return (
        <>
            <ul className="space-y-2">
                <MenuItems content={mainMenuData} />
            </ul>
        </>
    )
}

export default MainMenu
