import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import { useShowsContext } from "../../context/ShowsContext"
import { Movie } from "../Movie"

const MoviesList = () => {

    const { shows } = useShowsContext()

    return (
        <Flex direction="column" alignItems="center">
            <Heading as="h2" fontSize="50px" mb="40px">
                Our Popular Movies
            </Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {shows.map(show => (
                    <GridItem>
                        <Movie movie={show} />
                    </GridItem>
                ))}
            </Grid>
        </Flex>

    )
}

export { MoviesList }