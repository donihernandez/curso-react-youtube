import { Box, Container, Flex, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loading } from '../../components/Loading';
import { Movie } from '../../components/Movie';
import { useShowsContext } from '../../context/ShowsContext';
import { client } from '../../utils/client';

const Movies = () => {

    const { totalResults, setTotalResults, setTotalPages, shows, page, setPage, setShows } = useShowsContext();

    const [hasMore, setHasMore] = useState(true);

    const getMovies = useCallback(async () => {
        const response = await client.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        if (response.data) {
            const shows = response.data.results;
            setShows(shows)
            setTotalResults(response.data.total_results)
            setPage(page + 1)
            setTotalPages(response.data.total_pages)
        }
    }, [])

    useEffect(() => {
        getMovies()
    }, [])

    const getMoreMovies = async () => {
        const response = await client.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`)
        if (response.data) {
            const newShows = response.data.results;
            setShows([...shows, ...newShows])
            setPage(page + 1)
        } else {
            setHasMore(false)
        }
    }

    return (
        <Flex w="full" minH="100vh" pt="200px">
            <Container minW={['full', null, '90vw']}>
                <Heading as="h1" size="4xl" mb="40px">
                    Our Popular Movies
                </Heading>
                <InfiniteScroll
                    dataLength={totalResults}
                    next={getMoreMovies()}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <SimpleGrid columns={[1, null, 3]} spacing='20px'>
                        {shows.map(show => (
                            <Box>
                                <Movie movie={show} />
                            </Box>
                        ))}
                    </SimpleGrid>
                </InfiniteScroll>
            </Container>
        </Flex>
    )
}

export default Movies;