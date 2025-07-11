import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';

function Navbar() {
    const { isLoggedIn, toggleAuth } = useAuth();
    const { toggleTheme } = useThemeContext();

    return (
        <Flex justify="space-between" p={4} bg="teal.500" color="white">
            <Text fontWeight="bold">Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
            <Box>
                <Button size="sm" mr={2} onClick={toggleAuth}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
                <Button size="sm" onClick={toggleTheme}>
                    Toggle Theme
                </Button>
            </Box>
        </Flex>
    );
}

export default Navbar;
