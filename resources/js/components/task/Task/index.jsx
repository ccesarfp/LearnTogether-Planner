import { TaskBefore } from './styles.js';

export function Task({ task }) {
    return (
        <TaskBefore>
            {task.title} {task.due_date ? ' - ' + task.due_date : ''}
        </TaskBefore>
    )
}
