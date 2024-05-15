import { getCookie } from '../../utils/Cookies.js';
import { Board } from '../../components/task/Board/index.jsx';

export function Tasks() {
    let token = getCookie('token');




    return (
        <div>
            <h1>Tasks</h1>
            <Board token={token} />
        </div>
    )
}
