import { Anchor, Button } from '@mantine/core';

export function GoBack() {
    return (
        <Button
            className={"mb-3"}
            color="pink"
            variant="outline"
        >
            <Anchor
                c="pink"
                href="/"
                underline="never"
            >
                Voltar
            </Anchor>
        </Button>
    );
}
