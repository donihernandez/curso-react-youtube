import { Badge as ChakraBadge } from '@chakra-ui/react';

const Badge = ({ name, children, ...props }) => {
    const getColor = () => {
        switch (name.toLowerCase()) {
            case 'suspense':
                return {
                    bg: 'purple.500',
                    color: 'white',
                };
            case 'terror':
                return {
                    bg: 'orange.500',
                    color: 'white',
                };
            case 'drama':
                return {
                    bg: 'gray.500',
                    color: 'white',
                };
            case 'comedy':
                return {
                    bg: 'green.500',
                    color: 'white',
                };
            case 'action':
                return {
                    bg: 'red.500',
                    color: 'white',
                };
            case 'science fiction':
                return {
                    bg: 'teal.500',
                    color: 'white',
                };
            case 'animation':
                return {
                    bg: 'teal.500',
                    color: 'white',
                };
            case 'adventure':
                return {
                    bg: 'cyan.500',
                    color: 'white',
                };
            case 'family':
                return {
                    bg: 'orange.500',
                    color: 'white',
                };
            case 'mistery':
                return {
                    bg: 'white',
                    color: 'blue.500',
                };
            case 'crime':
                return {
                    bg: 'white',
                    color: 'red.500',
                };
            case 'thriller':
                return {
                    bg: 'white',
                    color: 'green.500',
                };
            case 'horror':
                return {
                    bg: 'white',
                    color: 'yellow.500',
                };
            case 'music':
                return {
                    bg: 'white',
                    color: 'black',
                };
            case 'fantasy':
                return {
                    bg: 'white',
                    color: 'purple.500',
                };
            case 'history':
                return {
                    bg: 'white',
                    color: 'orange.500',
                };
            default:
                return {
                    bg: 'black',
                    color: 'white',
                };
        }
    };

    return (
        <ChakraBadge
            as="span"
            bg={getColor().bg}
            color={getColor().color}
            fontFamily="Nunito"
            fontSize="12px"
            {...props}
        >
            {children}
        </ChakraBadge>
    );
};

export { Badge };