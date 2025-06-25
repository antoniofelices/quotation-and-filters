import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import allData from '@/data/pages/error'
import pictureColleDelleFinestre from '@/assets/images/error404-finestre.webp'
import { NavLink } from 'react-router'

function Error404() {
    return (
        <DefaultLayout>
            <Container>
                <img src={pictureColleDelleFinestre} alt={allData.altimage} />
                <h1>{allData.title}</h1>
                <ul>
                    <li>
                        <NavLink to="/">Front Page</NavLink>
                    </li>
                </ul>
            </Container>
        </DefaultLayout>
    )
}

export default Error404
