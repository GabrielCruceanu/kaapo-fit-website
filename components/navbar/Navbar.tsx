import { Box, ScaleFade, Image } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
    return (
        <ScaleFade initialScale={0.9} in>
            <Box backgroundColor="gray.900" display="flex" p="5">
                <Image src="./svg/kaapo-fit.svg" />
            </Box>
        </ScaleFade>
    );
};
