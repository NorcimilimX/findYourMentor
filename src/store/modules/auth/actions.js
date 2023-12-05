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
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
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

        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    autoLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                tokenExpiration: null
            })
        }
    }
}