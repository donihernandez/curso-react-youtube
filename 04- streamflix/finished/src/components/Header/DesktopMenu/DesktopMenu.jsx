import { Flex, Link } from '@chakra-ui/react';
import links from '../links';

const DesktopMenu = () => {
    const linkStyles = {
        _hover: {
            transform: 'scale(1.2)',
            color: 'yellow.500',
        },
        color: '#ffffff',
        fontFamily: 'Nunito',
        fontSize: '18px',
        fontWeight: '600',
        mr: '20px',
        textDecoration: 'none',
    };

    return (
        <Flex alignItems="center" ml="50px">
            {links.map(link => (
                <Link href={link.href} key={link.name} {...linkStyles}>
                    {link.name}
                </Link>
            ))}
        </Flex>
    )
}

export { DesktopMenu }