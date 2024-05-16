import { getCookie } from '../../utils/Cookies.js';
import { Default } from '../../components/layout/Default';
import { Board } from '../../components/task/Board';
import { Title } from '../../components/task/Title'

export function Tasks() {
    let token = getCookie('token');

    return (
        <Default>
            <Title value="Atividades" />
            <Board token={token} />
        </Default>
    )
}
