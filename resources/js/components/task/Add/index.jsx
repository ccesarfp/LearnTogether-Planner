import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Detail } from '../Detail';

export function Add() {
    const [opened, { open, close }] = useDisclosure(false);

    const handleTask = () => {
        opened ? close() : open();
    }

    return (
        <>
            <div
                style={{ width: '100%', textAlign: 'right' }}
            >
                <Button
                    variant="outline"
                    size="sm"
                    style={{border: '1px solid #A61E4D'}}
                    c='pink.7'
                    onClick={handleTask}
                >
                    {opened ? 'X' : 'Adicionar Atividade'}
                </Button>
            </div>

            {
                opened && <Detail />
            }
        </>
    )
}

