import { Button, Flex, Input } from "@chakra-ui/react"

const SearchBar = () => {
    return (
        <Flex w="full" justifyContent="center" mt="30px">
            <Input placeholder='Search by name...' maxW="400px" size="lg" mr='10px' border="2px solid" borderColor="#333" />
            <Button colorScheme="blue" size="lg">Explore</Button>
        </Flex>
    )
}

export { SearchBar }