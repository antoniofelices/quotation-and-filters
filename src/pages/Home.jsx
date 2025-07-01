import Container from '@components/base/Container'
import allData from '@/data/pages/home'
import { Link } from 'react-router'

const Home = () => {
    return (
        <Container>
            <h1>{allData.title}</h1>
            <p>{allData.content1}</p>
            <p>{allData.content2}</p>
            <br />
            <Link to={`/request-quotation`}>Request a quotation</Link>
        </Container>
    )
}

export default Home
