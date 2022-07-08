import { chakra, Container, Flex, Heading } from '@chakra-ui/react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu';

import { useBreakpoints } from '../../hooks/useBreakpoints'

const Header = () => {
    const { isSmallerThanDesktop } = useBreakpoints();


    return (
        <Flex
            alignItems="center"
            bg="blue.800"
            color="#fff"
            height={{ base: '70px', lg: '90px' }}
            left={0}
            position="fixed"
            top={0}
            transition="all .3s ease-in"
            w="full"
            zIndex="666"
        >
            <Container maxW={{ base: '100vw', lg: '80vw' }} w="full">
                <Flex
                    alignItems="center"
                    justifyContent={[
                        'space-between',
                        'space-between',
                        'space-between',
                        'flex-start',
                    ]}
                    w="full"
                >
                    <Heading as="h4">
                        Stream<chakra.span color="yellow.500">flix</chakra.span>
                    </Heading>

                    {isSmallerThanDesktop ? <MobileMenu /> : <DesktopMenu />}
                </Flex>
            </Container>

        </Flex>
    )
}

export { Header }