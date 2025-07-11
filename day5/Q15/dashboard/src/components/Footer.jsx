import { Box, Text } from '@chakra-ui/react';
import { useThemeContext } from '../contexts/ThemeContext';

function Footer() {
    const { theme } = useThemeContext();

    return (
        <Box
            as="footer"
            position="sticky"
            bottom="0"
            w="100%"
            p={4}
            bg={theme === 'light' ? 'gray.300' : 'gray.800'}
            color={theme === 'light' ? 'black' : 'white'}
            textAlign="center"
            mt="auto"
        >
            <Text>© 2025 Dashboard Footer</Text>
        </Box>
    );
}

export default Footer;
