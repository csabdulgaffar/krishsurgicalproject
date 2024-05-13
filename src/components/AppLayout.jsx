import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import AdBar from "./AdBar"
function AppLayout() {
    return (
        <>
            <AdBar />

            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default AppLayout