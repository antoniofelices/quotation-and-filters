import Container from '@components/base/Container'
import allData from '@/data/pages/home'
import { Link } from 'react-router'

const Home = () => {
    return (
        <Container>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {allData.title}
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                {allData.content1}
            </p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                {allData.content2}
            </p>
            <Link
                to={`/request-quotation`}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-900"
            >
                Request a quotation
            </Link>
        </Container>
    )
}

export default Home
