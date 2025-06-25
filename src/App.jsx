import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import Request from '@pages/RequestQuotation'
import Ongoing from '@pages/OngoingQuotation'
import Error404 from '@pages/Error'
import routesData from '@/data/routesData'

const AllRoutes = () => {
    const [request, ongoing, error] = routesData
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={`/${request.url}`} element={<Request />} />
            <Route path={`/${ongoing.url}`} element={<Ongoing />} />
            <Route path={`/${error.url}`} element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes
