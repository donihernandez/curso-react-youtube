import { Box, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../../components/Badge";
import { Loading } from "../../components/Loading";
import { client } from "../../utils/client";
import { getTrailer } from "../../utils/getTrailer";
import { IMAGE_CONFIG, IMAGE_URL } from "../../utils/images";

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);
    const [trailer, setTrailer] = useState(null);

    const size = IMAGE_CONFIG.backdrop_sizes.find(s => s === 'original');

    const image = `${IMAGE_URL}${size}${movie?.backdrop_path}`;

    const badgeStyle = {
        ml: '5px',
    };

    const getMovieDetails = async () => {
        const response = await client.get(`/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        if (response.data) {
            setMovie(response.data)
        }
    }

    const handleGetTrailer = async () => {
        const response = await client.get(
            `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        );

        if (response.data) {
            setVideos(response.data.results);
            const trailer = getTrailer(response.data.results);
            setTrailer(trailer);
        }
    };

    useEffect(() => {
        getMovieDetails()
        handleGetTrailer()
    }, [])


    const getGenres = useMemo(() => {
        if (movie) {
            return movie.genres.map(genre => <Badge key={genre.id} {...badgeStyle} name={genre?.name}>{genre?.name}</Badge>)
        }
    }, [movie])



    return (
        <Flex w="full" minH="100vh" my="150px">
            <Container minW={['full', null, '80vw']}>
                {movie ? (
                    <>
                        <Image w="full" src={image} alt={movie.original_title} />

                        <Heading as="h1" size="2xl" mt="20px" mb="20px">
                            {movie.original_title}
                        </Heading>
                        <Flex mb="20px">
                            {getGenres}
                        </Flex>
                        <Text fontSize="18px">{movie.overview}</Text>
                        <Divider my={4} />
                        <Box
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            as="iframe"
                            frameBorder="0"
                            h="600px"
                            src={`https://www.youtube.com/embed/${trailer}`}
                            w="full"
                        ></Box>
                    </>
                )
                    : <Loading />}
            </Container>
        </Flex>
    )
}

export default MovieDetails;