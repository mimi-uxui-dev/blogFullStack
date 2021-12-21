import { Form, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { signup } from '../../actions/auth'


function SignupComponent() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: ''
    })

    const { name, email, password, error, loading, message, showForm } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, loading: true, error: false })

        const user = { name, email, password }

        signup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
            } else {
                setValues({ ...values, name: '', email: '', password: '', error: '', loading: false, message: data.message, showForm: false })
            }
        })

    }

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    const signupForm = () => {
        return (
            <Form onSubmit={handleSubmit} style={{ maxWidth: '360px' }}>

                <Input
                    value={name}
                    name="name"
                    placeholder="Your Name ..."
                    type="text"
                    onChange={handleChange('name')}
                />
                <Input
                    value={password}
                    name="password"
                    placeholder="Your password ..."
                    type="password"
                    onChange={handleChange('password')}
                />
                <Input
                    value={email}
                    name="email"
                    placeholder="Your email ..."
                    type="email"
                    onChange={handleChange('email')}
                />
                <Button color="primary" >Sign Up</Button>

            </Form>
        )
    }

    return (
        signupForm()
    )
}

export default SignupComponent
