import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex w="full" bg="gray.900" color="#fff" py="15px" justifyContent="center" alignItems="center" mt="50px">
            <Text>Streamflix © All Rights Reserved {new Date().getFullYear()}</Text>
        </Flex>
    )
}

export { Footer }