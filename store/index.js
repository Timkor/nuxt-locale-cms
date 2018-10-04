

export const actions = {

    async nuxtServerInit ({dispatch}) {
        
        await dispatch('scopes/fetchAll');
    }
}