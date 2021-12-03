const express = require('express')
const router = express.Router()
const { signup, signin, signout, requireSignin } = require('../controllers/auth')

// valdiation
const { runValidation } = require('../validators')
const { userSignupValidator, userSigninValidator } = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.get('/signout', signout)

//test : any route you want to protect you add 'requireSignin' as a middleware 
router.get('/secret', requireSignin, (req, res) => {
    res.json({
        message: 'we have access to secret page'
    })
})

module.exports = router