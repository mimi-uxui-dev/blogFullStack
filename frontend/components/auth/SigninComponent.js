import { Form, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { signin } from '../../actions/auth'
import Router from 'next/router'


function SigninComponent() {
     const [values, setValues] = useState({

          email: '',
          password: '',
          error: '',
          loading: false,
          message: '',
          showForm: true
     })

     const { email, password, error, loading, message, showForm } = values

     const handleSubmit = (e) => {
          e.preventDefault()
          setValues({ ...values, loading: true, error: false })

          const user = { email, password }

          signin(user).then(data => {
               if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
               } else {
                    // save user token to cookie
                    // save user info to localStorage
                    // authenticate user
                    Router.push('/')
               }
          })

     }

     const handleChange = name => e => {
          setValues({ ...values, error: false, [name]: e.target.value })
     }

     const showLoading = () => (loading ? <div className='alert alert-info'>Loading ... </div> : "")
     const showError = () => (error ? <div className='alert alert-danger'>{error} </div> : "")
     const showMessage = () => (message ? <div className='alert alert-info'> {message} </div> : "")

     const signinForm = () => {
          return (
               <Form onSubmit={handleSubmit} style={{ maxWidth: '360px' }}>
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
                    <Button color="primary" >Sign IN</Button>

               </Form>
          )
     }

     return <>
          {showError()}
          {showLoading()}
          {showMessage()}
          {showForm && signinForm()}
     </>

}

export default SigninComponent
