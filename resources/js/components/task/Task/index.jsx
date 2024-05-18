import { DateText, TaskBefore } from './styles.js';
import { useDisclosure } from '@mantine/hooks';
import { Detail } from '../Detail/index.jsx';

export function Task({ task }) {
    const date = task.due_date ? new Date(task.due_date).toLocaleDateString('pt-BR') : '';
    const [opened, { open, close }] = useDisclosure(false);

    const handleTask = () => {
        opened ? close() : open();
    }

    return (
        <>
            <TaskBefore
                onClick={handleTask}
            >
                <span
                    style={{ textDecoration: task.status === 'done' ? 'line-through' : '' }}
                >
                    {task.title}
                </span>
                {
                    task.due_date &&
                    <DateText>
                        ({date})
                    </DateText>
                }
            </TaskBefore>

            <div
                style={{ position: 'absolute', right: '20px', top: '130px' }}
            >
                {
                    opened && <Detail task={task} />
                }
            </div>
        </>

    )
}
