import Container from '@components/base/Container'
import allData from '@/data/pages/error'
import pictureColleDelleFinestre from '@/assets/images/error404-finestre.webp'
import { NavLink } from 'react-router'

function Error404() {
    return (
        <Container>
            <img src={pictureColleDelleFinestre} alt={allData.altimage} />
            <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {allData.title}
            </h1>
            <ul className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                <li>
                    <NavLink to="/">Front Page</NavLink>
                </li>
            </ul>
        </Container>
    )
}

export default Error404
