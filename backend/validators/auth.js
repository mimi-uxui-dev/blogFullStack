const { check } = require('express-validator')

exports.userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required.'),
    check('email').isEmail().withMessage('Email must be valide.'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters.'),
]

exports.userSigninValidator = [
    check('email').isEmail().withMessage('Email must be valide.'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters.'),
]