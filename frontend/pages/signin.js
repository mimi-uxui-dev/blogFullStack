import Layout from "../components/Layout"
import SigninComponent from './../components/auth/SigninComponent';

function Signin() {
    return (
        <Layout>
            <h1>Sign in</h1>
            <SigninComponent />
        </Layout>
    )
}

export default Signin