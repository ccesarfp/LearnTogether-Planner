import { getCookie } from '../../utils/Cookies.js';
import { Default } from '../../components/layout/Default';

import { Board } from '../../components/task/Board';
import { Title } from '../../components/task/Title'

import { Add } from '../../components/task/Add';

import { Delimiter } from './styles.js';

export function Tasks() {
    let token = getCookie('token');

    return (
        <Default>
            <Delimiter style={{ float: 'left' }}>
                <Title value="Atividades" />
                <Board token={token} />
            </Delimiter>

            <Delimiter style={{ float: 'right' }}>
                <Add token={token} />
            </Delimiter>
        </Default>
    )
}
