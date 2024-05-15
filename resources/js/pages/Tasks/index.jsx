import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/Cookies.js';
import { useNavigate } from 'react-router-dom';

export function Tasks() {
    let token = getCookie('token');
    const navigate = useNavigate();
    const [tasks, setTasks] = useState(null);

    const fetchData = () => {
        axios.get('/api/task/', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        }).then((response) => {
            setTasks(response.data.tasks.map(task =>
                <div key={task.id} className={ 'task' }>
                    {task.title} {task.due_date ? ' - ' + task.due_date : ''}
                </div>
            ));
        }).catch((reason) => {
            if (reason.response.status === 401) {
                navigate('/sing-in');
            }
        })
    };

    useEffect(  () => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <div>
                {tasks}
            </div>
        </div>
    )
}
