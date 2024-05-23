import { Center, Box, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export function Filled({ breakLine = false, children }) {
    const { height, width } = useViewportSize();
    const theme = useMantineTheme();

    return (
        <Center
            w={width}
            h={height}
            bg="dark.8"
        >
            <Box
                w={400}
                bg="pink.9"
                p={20}
                style={{ 'border-radius': '20px'} && breakLine ? { display: 'flex', placeContent: 'center' } : ''}
            >
                {children}
            </Box>
        </Center>
      );
}
