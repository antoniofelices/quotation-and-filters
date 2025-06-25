import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default DefaultLayout
