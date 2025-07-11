import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

function Sidebar() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const { isLoggedIn } = useAuth();

    if (!isLargerThan768) return null;

    return (
        <Box w="200px" h="100vh" bg="gray.200" p={4} position="fixed">
            <Text fontWeight="bold">Sidebar</Text>
            {isLoggedIn && <Text mt={4}>Welcome, User!</Text>}
        </Box>
    );
}

export default Sidebar;
