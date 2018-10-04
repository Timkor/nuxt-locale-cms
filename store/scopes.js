
export const state = () => {
    return {
        scopes: {},
        scopeList: ['global.brands', 'global.products'],
        selectedScope: null
    }
}

export const mutations = {

    setSelectedScope(state, scopeId) {
        state.selectedScope = scopeId;
    },

    setScope(state, scope) {
        state.scopes[scope.id] = scope;
        console.log(scope);
    }
}

export const actions = {

    fetchAll({state, dispatch}) {
        
        return Promise.all(
            state.scopeList.map(scopeId => dispatch('fetchScope', scopeId))
        );
    },

    fetchScope({commit}, scopeId) {
        var path = scopeId.split('.').join('/');
        return this.$axios.$get(`/locales/fr/${path}.json`).then(scopeData => {
            
            commit('setScope', {
                id: scopeId,
                data: scopeData
            });
        })
    },

    selectScope({dispatch, commit}, scopeId) {
        
        return dispatch('fetchScope', scopeId)
            .then(scope => {
                commit('setSelectedScope', scopeId);
            });
    }
}

export const getters = {

    selectedScope(state) {
        return state.scopes[state.selectedScope];
    },

    scopes(state) {
        return state.scopeList.map(scopeId => state.scopes[scopeId]);
    }
}