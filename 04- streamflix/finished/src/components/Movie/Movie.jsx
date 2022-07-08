import { chakra, AspectRatio, Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import { IMAGE_CONFIG, IMAGE_URL } from "../../utils/images";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
    let navigate = useNavigate();

    const size = IMAGE_CONFIG.poster_sizes.find(s => s === 'w342');

    const image = `${IMAGE_URL}${size}${movie.poster_path}`;

    const extractText = () => {
        return movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview;
    }

    return (
        <Box w="375px" border="1px solid" borderColor="#eee" borderRadius="25px" overflow="hidden">
            <AspectRatio maxW='400px' ratio={1}>
                <Image src={image} alt='naruto' objectFit='cover' />
            </AspectRatio>
            <Flex direction="column" mt="10px" p="15px" h="full">
                <Flex alignItems="center" mt="5px">
                    <StarIcon color="yellow.400" mr="5px" />
                    <Text
                        color="#333"
                        fontFamily="Nunito"
                        fontSize="12px"
                    >
                        <chakra.span fontSize="18px" fontWeight="800">
                            {movie.vote_average}
                        </chakra.span>
                        /10
                    </Text>
                </Flex>
                <Heading as="h4" size="md" my="10px" color="blue.500">
                    {movie.original_title}
                </Heading>
                <Text textAlign="justify">
                    {extractText()}
                </Text>

                <Flex w="full">
                    <Button w="full" onClick={() => navigate(`/movies/${movie.id}`)} colorScheme="blue" mt="10px" >
                        View More
                    </Button>
                </Flex>

            </Flex>
        </Box>
    )
}

export { Movie }