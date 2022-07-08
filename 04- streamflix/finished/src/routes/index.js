import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import {Loading} from "../components/Loading"

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails'))
const Tv = lazy(() => import('../pages/Tv/Tv'))
const TvDetails = lazy(() => import('../pages/Tv/TvDetails'))

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />}>
                    <Route path=":id" element={<MovieDetails />} />
                </Route>
                <Route path="/tv" element={<Tv />}>
                    <Route path=":id" element={<TvDetails />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Router