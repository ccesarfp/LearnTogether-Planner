import { Header } from '../../header/Header';
import { Main } from '../../content/Main'
import { Footer } from '../../footer/Footer';

export function Default({ children }) {
    return (
        <>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    )
}
