import { Header } from "../Header"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export { Layout }