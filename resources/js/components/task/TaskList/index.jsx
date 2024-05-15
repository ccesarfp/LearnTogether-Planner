import { Task } from '../Task/index.jsx';

export function TaskList({ tasks }) {
    return (
        <div id='task-list'>
            {
                tasks.map(task =>
                    <Task key={task.id} task={task} />
                )
            }
        </div>
    )
}
