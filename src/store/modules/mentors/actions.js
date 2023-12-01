export default {
    async registerMentor(context, data) {
        const userId = context.rootGetters.userId
        const mentorData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        }

        const response = await fetch(`https://find-your-mentor-app-db-default-rtdb.firebaseio.com/mentors/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(mentorData)
        })

        // const responseData = await response.json()

        if (!response.ok) {
            //error
        }

        context.commit('registerMentor', {
            ...mentorData,
            id: userId
        })
    },
    async loadMentors(context) {
        const response = await fetch(
            `https://find-your-mentor-app-db-default-rtdb.firebaseio.com/mentors.json1`
        )
        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch data!')
            throw error
        }

        const mentors = []

        for (const key in responseData) {
            const mentor = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            }
            mentors.push(mentor)
        }
        context.commit('setMentors', mentors)
    }
};