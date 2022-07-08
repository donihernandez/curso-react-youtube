import { Container, Flex } from "@chakra-ui/react"
import { useCallback, useEffect } from "react";

import { MoviesList } from "../components/MoviesList";
import { Welcome } from "../components/Welcome";
import { useShowsContext } from "../context/ShowsContext";
import { client } from "../utils/client";

const Home = () => {

    const { setShows, setTotalResults, setTotalPages } = useShowsContext()

    const getMovies = useCallback(async () => {
        const response = await client.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        if (response.data) {
            const shows = response.data.results;
            setShows(shows)
            setTotalResults(response.data.total_results)
            setTotalPages(response.data.total_pages)
        }
    }, [setShows, setTotalPages, setTotalResults])

    useEffect(() => {
        getMovies()
    }, [getMovies])

    return (
        <Flex w="full">
            <Container minW={['full', null, '80vw']}>
                <Welcome />
                <MoviesList />
            </Container>
        </Flex>
    )
}

export default Home;