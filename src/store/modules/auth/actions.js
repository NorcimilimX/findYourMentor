export default {
    login() {

    },
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXXSMkX6lB-7tQEkK-rsmDM6-9Xj1UkX4', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to authenticate!')
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    }
}