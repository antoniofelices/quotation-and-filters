import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import allData from '@/data/pages/home'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <DefaultLayout>
            <Container>
                <h1>{allData.title}</h1>
                <p>{allData.content1}</p>
                <p>{allData.content2}</p>
                <br />
                <NavLink to={`/request-quotation`}>Request a quotation</NavLink>
            </Container>
        </DefaultLayout>
    )
}

export default Home
