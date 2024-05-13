import { Center, Box } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';

export function Filled({ breakLine = false, children }) {
    const { height, width } = useViewportSize();

    return (
        <Center
            w={width}
            h={height}
            bg="red.1"
        >
            <Box
                w={400}
                bg="red.3"
                p={20}
                style={breakLine ? { display: 'flex', placeContent: 'center' } : ''}
            >
                {children}
            </Box>
        </Center>
      );
}
