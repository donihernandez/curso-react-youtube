import { forwardRef } from 'react';
import { Button } from '@chakra-ui/react';

import { HiMenuAlt1 } from 'react-icons/hi';

const HamburguerButton = forwardRef(({ onClick }, ref) => {
    return (
        <Button onClick={onClick} ref={ref} variant="link">
            <HiMenuAlt1 color="#fff" size="30px" />
        </Button>
    );
});

export { HamburguerButton };
