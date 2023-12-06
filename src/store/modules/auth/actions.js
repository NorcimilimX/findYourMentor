let timer

export default {
    login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })
    },
    logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('tokenExpiration')

        clearTimeout(timer)

        context.commit('setUser', {
            token: null,
            userId: null
        })
    },
    async auth(context, payload) {
        const mode = payload.mode
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXXSMkX6lB-7tQEkK-rsmDM6-9Xj1UkX4'

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXXSMkX6lB-7tQEkK-rsmDM6-9Xj1UkX4'
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if (!response.ok) {
            throw new Error(
                responseData.message ||
                `Failed to authenticate!${mode === 'login' ? '' : ' Probably user with such email already exist.'}`
            )
        }

        const expiresIn = +responseData.expiresIn * 1000
        // const expiresIn = 5000
        const expirationDate = new Date().getTime() + expiresIn

        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)
        localStorage.setItem('tokenExpiration', expirationDate)

        timer = setTimeout(function () {
            context.dispatch('autoLogout')
        }, expiresIn)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        })
    },
    autoLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokenExpiration = localStorage.getItem('tokenExpiration')

        const expiresIn = +tokenExpiration - new Date().getTime()

        if (expiresIn < 0) {
            return
        }

        timer = setTimeout(function (){
            context.dispatch('autoLogout')
        }, expiresIn)

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            })
        }
    },
    autoLogout(context) {
        context.dispatch('logout')
        context.commit('setDidAutoLogout')
    }
}