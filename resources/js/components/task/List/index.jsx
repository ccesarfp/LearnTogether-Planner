import { Task } from '../Task/index.jsx';
import { TaskList } from './styles.js';

export function List({ tasks }) {
    return (
        <TaskList>
            {
                tasks.map(task =>
                    <Task key={task.id} task={task} />
                )
            }
        </TaskList>
    )
}
