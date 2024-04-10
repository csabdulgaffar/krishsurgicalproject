import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import AdBar from "./AdBar"
function AppLayout() {
    return (
        <>
            <AdBar />

            <Header />
            <main className="max-w-screen-lg mx-auto mt-2 px-2">
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default AppLayout