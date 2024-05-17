import { TaskBefore } from './styles.js';

export function Task({ task }) {
    console.log(task.due_date);
    const date = task.due_date ? new Date(task.due_date).toLocaleDateString('pt-BR') : '';

    return (
        <TaskBefore>
            {task.title} {task.due_date ? ' - ' + date : ''}
        </TaskBefore>
    )
}
