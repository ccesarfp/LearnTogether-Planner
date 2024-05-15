
export function Index({ task }) {
    return (
        <div className={'task'}>
            {task.title} {task.due_date ? ' - ' + task.due_date : ''}
        </div>
    )
}
