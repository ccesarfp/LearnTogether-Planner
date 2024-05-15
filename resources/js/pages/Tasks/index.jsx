import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/Cookies.js';
import { useNavigate } from 'react-router-dom';
import { Index } from '../../components/task/Task/index.jsx';

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
                <Index key={task.id} task={task} />
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
