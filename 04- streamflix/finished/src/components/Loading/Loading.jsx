import { Flex, Spinner } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
            <Spinner color="blue.500" size="xl" thickness="6px" />
        </Flex>
    )
}

export { Loading }