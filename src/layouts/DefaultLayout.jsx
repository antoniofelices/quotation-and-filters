import Aside from '@layouts/Aside'
import Header from '@layouts/Header'

const DefaultLayout = ({ children }) => {
    return (
        <div className="antialiased bg-gray-100 dark:bg-gray-900 min-h-dvh">
            <Header />
            <Aside />
            <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
        </div>
    )
}

export default DefaultLayout
