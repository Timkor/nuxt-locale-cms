

export const actions = {

    async nuxtServerInit ({dispatch}) {
        
        await dispatch('routes/fetchAll');
        await dispatch('scopes/fetchAll');
    }
}