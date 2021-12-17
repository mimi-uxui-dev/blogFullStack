import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.css'

function Layout({ children }) {
    return (
        <div>
            <Header />

            <div>
                {children}
            </div>


        </div>
    )
}

export default Layout
