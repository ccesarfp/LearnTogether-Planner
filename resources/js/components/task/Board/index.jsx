import { List } from '../List/index.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
    import { TaskBoard } from './styles.js';

export function Board({ token    }) {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState(null);

    const fetchData = () => {
        axios.get('/api/task/', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        }).then((response) => {
            setTasks(response.data.tasks);
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
        <TaskBoard>
            {tasks && <List tasks={tasks} />}
        </TaskBoard>
    )
}
