import {    Space } from '@mantine/core';
import { Filled } from '../../components/layout/Filled';
import Link from '../../components/Link';

export function Home() {
    const color = "pink";

    return (
        <Filled
            breakLine={true}
        >
            <Link
                href="/sing-up"
                color={color}
            >
                Cadastar-se
            </Link>

            <Space w="sm"  />

            <Link
                href="/sing-in"
                color={color}
            >
                Entrar
            </Link>
        </Filled>
    )
}
