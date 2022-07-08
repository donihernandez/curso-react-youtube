import { Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"

const Welcome = () => {
    return (
        <Flex direction="column" h="full" w="full" justifyContent="center" alignItems="center" >
            <Image src="/images/movies.png" alt="Family Watching Movies" h="300px" />
            <Heading as="h1" size={['2xl', null, '4xl']} textAlign="center" mt="40px" mb="10px">
                Unlimited movies and series and much more.
            </Heading>
            <Text fontSize="25px">
                Enjoy wherever you want. Cancel whenever you want.
            </Text>

            <Flex w="full" justifyContent="center" mt="30px">
                <Input placeholder='Search by name...' maxW="400px" size="lg" mr='10px' border="2px solid" borderColor="#333" />
                <Button colorScheme="blue" size="lg">Explore</Button>
            </Flex>

        </Flex>
    )
}

export { Welcome }