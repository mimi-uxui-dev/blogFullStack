import fetch from 'isomorphic-fetch'
import { API } from "../config"
import Cookie from 'js-cookie'
export const signup = (user) => {


    return fetch(`${API}/api/signup`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            console.log('res', res)
            return res.json()
        })
        .catch((err) => console.log('err', err))
}

export const signin = (user) => {

    return fetch(`${API}/api/signin`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            console.log('res', res)
            return res.json()
        })
        .catch((err) => console.log('err', err))
}

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        Cookie.set(key, value, { expires: 1 })
    }
}

// remove cookie
export const removeCookie = (key) => {
    if (process.browser) {
        Cookie.remove(key)
    }
}

// get cookie
export const getCookie = (key) => {
    if (process.browser) {
        Cookie.get(key)
    }
}

// localStorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localstorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if (process.browser) {
        localstorage.removeItem(key)
    }
}


// authenticate user by pass data to cookie and local storage
export const authenticate = (data, next) => {
    setCookie('token', data.token)
    setLocalStorage('user', data.user)
    next()
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localstorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}