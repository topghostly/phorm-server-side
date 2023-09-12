import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie'

import {decodedTokenInterface} from '../interface/AuthInterface'

function isAuthenticated() {
    const token = Cookies.get("sessionToken")

    try{
        const decodedToken: decodedTokenInterface = jwtDecode(token)

        const currentTime = Date.now() / 1000

        return decodedToken.exp >= currentTime
    }catch{
        Cookies.remove("sessionToken")
        return false
    }
}

export default isAuthenticated