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
    }
};