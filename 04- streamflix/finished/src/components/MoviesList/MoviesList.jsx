import { Box, Flex, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/react"
import { useShowsContext } from "../../context/ShowsContext"
import { Movie } from "../Movie"

const MoviesList = () => {

    const { shows } = useShowsContext()

    return (
        <Flex direction="column" alignItems="center">
            <Heading as="h2" fontSize="50px" mb="40px">
                Our Popular Movies
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing='20px'>
                {shows.map(show => (
                    <Box>
                        <Movie movie={show} />
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>

    )
}

export { MoviesList }