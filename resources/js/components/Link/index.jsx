import { Anchor, Button } from '@mantine/core';


export default function Link({ href, color, children }) {
    return (
        <Button
            variant="outline"
            size="md"
            color={color}
        >
            <Anchor
                href={href}
                target="_self"
                underline="never"
                c={color}
            >
                { children }
            </Anchor>
        </Button>
    )
}
