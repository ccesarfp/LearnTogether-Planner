import { Close, DateText, TaskBefore } from './styles.js';
import { useDisclosure } from '@mantine/hooks';
import { Detail } from '../Detail/index.jsx';
import axios from 'axios';
import { getCookie } from '../../../utils/Cookies.js';
import { useNavigate } from 'react-router';

export function Task({ task }) {
    const navigate = useNavigate();
    const date = task.due_date ? new Date(task.due_date).toLocaleDateString('pt-BR') : '';
    const [opened, { open, close }] = useDisclosure(false);

    const handleTask = () => {
        opened ? close() : open();
    }
    const handleDelete = () => {
        axios.post('/api/task/delete', {
            id: task.id,
        }, {
            headers: {
                Authorization: `Bearer ${getCookie('token')}`,
                Accept: 'application/json',
            }
        }).then(r => {
            if(r.status === 200) {
                navigate(0);
            }
        });
    }

    return (
        <>
            <TaskBefore>
                <span
                    style={{ textDecoration: task.status === 'done' ? 'line-through' : '' }}
                    onClick={handleTask}
                >
                    {task.title}
                </span>
                {
                    task.due_date &&
                    <DateText
                        onClick={handleTask}
                    >
                        ({date})
                    </DateText>
                }
                <Close
                    onClick={handleDelete}
                >
                    X
                </ Close>
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
