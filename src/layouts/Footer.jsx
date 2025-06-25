import Logo from '@/components/base/Logo'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer id="footer" className="@container/footer py-10">
            <div className="container grid max-w-5xl items-center justify-center gap-7 lg:grid-cols-6 lg:justify-start">
                <div className="site-icon lg:col-span-1">
                    <Link to="/" arial-label="link to frontpage">
                        <Logo />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
