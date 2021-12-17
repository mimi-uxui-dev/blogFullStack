import fetch from 'isomorphic-fetch'
import { API } from "../config"

export const signup = (user) => {
    console.log('API', API)

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