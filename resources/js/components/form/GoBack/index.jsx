import { Anchor, Button } from '@mantine/core';

export function GoBack() {
    return (
        <Button
            className={"mb-3"}
            color="dark.7"
            variant="outline"
        >
            <Anchor
                c="dark.7"
                href="/"
                underline="never"
            >
                Voltar
            </Anchor>
        </Button>
    );
}
