import { useMediaQuery } from '@chakra-ui/react';

const useBreakpoints = () => {
    const [isSmallerThanDesktop, isLaptop] = useMediaQuery([
        '(max-width: 768px)',
        '(min-width: 768px) and (max-width: 1024px)',
    ]);

    return {
        isLaptop,
        isSmallerThanDesktop,
    };
};

export { useBreakpoints };