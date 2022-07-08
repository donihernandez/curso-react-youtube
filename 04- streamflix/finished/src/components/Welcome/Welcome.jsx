import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { SearchBar } from "../SearchBar"

const Welcome = () => {
    return (
        <Flex direction="column" w="full" h="100vh" justifyContent="center" alignItems="center" my="100px" >
            <Image src="/images/movies.png" alt="Family Watching Movies" h="300px" />
            <Heading as="h1" size={['2xl', null, '4xl']} textAlign="center" mt="40px" mb="10px">
                Unlimited movies and series and much more.
            </Heading>
            <Text fontSize="25px">
                Enjoy wherever you want. Cancel whenever you want.
            </Text>

            <SearchBar />
        </Flex >
    )
}

export { Welcome }