import { DateText, TaskBefore } from './styles.js';

export function Task({ task }) {
    const date = task.due_date ? new Date(task.due_date).toLocaleDateString('pt-BR') : '';

    return (
        <TaskBefore>
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
    )
}
