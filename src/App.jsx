import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import Request from '@pages/RequestQuotation'
import Ongoing from '@pages/OngoingQuotation'
import Error404 from '@pages/Error'
import SingleQuotation from '@pages/SingleQuotation'
import routesData from '@/data/routesData'
import { QuotationProvider } from '@context/QuotationContext'
import { RequestQuotationProvider } from '@context/RequestQuotationContext'
import { OngoingQuotationProvider } from '@context/OngoingQuotationContext'

const AllRoutes = () => {
    const [request, ongoing, quotation, error] = routesData
    return (
        <QuotationProvider>
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path={`/${request.url}`}
                    element={
                        <RequestQuotationProvider>
                            <Request />
                        </RequestQuotationProvider>
                    }
                />
                <Route
                    path={`/${ongoing.url}`}
                    element={
                        <OngoingQuotationProvider>
                            <Ongoing />
                        </OngoingQuotationProvider>
                    }
                />
                <Route
                    path={`/${quotation.url}/:id`}
                    element={<SingleQuotation />}
                />
                <Route path={`/${error.url}`} element={<Error404 />} />
            </Routes>
        </QuotationProvider>
    )
}

export default AllRoutes
