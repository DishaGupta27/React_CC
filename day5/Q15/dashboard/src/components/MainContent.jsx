import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const products = ['Product A', 'Product B', 'Product C', 'Product D'];

function MainContent() {
    return (
        <Box ml={{ base: 0, md: '200px' }} p={4}>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {products.map((product, idx) => (
                    <Box key={idx} p={4} bg="teal.100" borderRadius="md">
                        <Text>{product}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default MainContent;
