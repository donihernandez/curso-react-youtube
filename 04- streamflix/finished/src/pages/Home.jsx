import { Container, Flex } from "@chakra-ui/react"
import { Welcome } from "../components/Welcome";

const Home = () => {
    return (
        <Flex w="full" padding="100px 0">
            <Container minW={['full', null, '80vw']} minH="100vh">
                <Welcome />
            </Container>
        </Flex>
    )
}

export default Home;