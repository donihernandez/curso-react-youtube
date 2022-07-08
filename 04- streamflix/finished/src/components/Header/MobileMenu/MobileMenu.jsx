import { DrawerHeader, Flex, Link, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';


import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from '@chakra-ui/react';

import links from '../links';

import { HamburguerButton } from './HamburgerButton';

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);

    const linkStyles = {
        _hover: {
            color: 'yellow.500',
            textDecoration: 'none',
        },
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: '35px',
        mb: '30px',
        fontWeight: '600',
        textDecoration: 'none',
    };

    return (
        <>
            <HamburguerButton onClick={onOpen} ref={btnRef} />
            <Drawer
                finalFocusRef={btnRef}
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
            >
                <DrawerOverlay />
                <DrawerContent bg="blue.800" zIndex="9999">
                    <DrawerCloseButton
                        color="#fff"
                        padding="20px"
                        size="30px"
                    />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <Flex
                            alignItems="center"
                            direction="column"
                            h="full"
                            justifyContent="center"
                        >
                            {links.map(link => (
                                <Link
                                    href={link.href}
                                    key={link.name}
                                    {...linkStyles}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { MobileMenu };
