import { Header } from '../../header/Header';
import { Main } from '../../content/Main'

export function Default({ children }) {
    return (
        <>
            <Header />
            <Main>
                { children }
            </Main>
        </>
    )
}
