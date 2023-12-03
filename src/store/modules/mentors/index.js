import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            mentors: [
                {
                    id: 'm1',
                    firstName: 'Mark',
                    lastName: 'Müller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Max and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 55
                },
                {
                    id: 'm2',
                    firstName: 'Mariella',
                    lastName: 'Jonescu',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Mariella and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
                {
                    id: 'm3',
                    firstName: 'Sebastian',
                    lastName: 'Larsson',
                    areas: ['backend', 'devops'],
                    description:
                        'My name is Sebastian and I am a senior backend developer with more than 10 years hands on experience on PHP technology stack, I can help you reach better understanding of different frameworks, web applications, security and administration',
                    hourlyRate: 50
                },
                {
                    id: 'm4',
                    firstName: 'Lorenzo',
                    lastName: 'Da Villi',
                    areas: ['pm'],
                    description:
                        'Im Lorenzo and I am a advanced project manager, I can help you to get in IT as a pm, and show you most needed cases of this workflow',
                    hourlyRate: 35
                },
                {
                    id: 'm5',
                    firstName: 'Renata',
                    lastName: 'Malinowska',
                    areas: ['marketing'],
                    description:
                        'Im Renata and I am a senior marketing lead, I can teach you how to leverage data analytics to optimize marketing strategies, ensuring you make data-driven decisions for impactful results',
                    hourlyRate: 40
                }
            ]
        };
    },
    mutations,
    actions,
    getters
}