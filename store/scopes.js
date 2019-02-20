
export const state = () => {
    return {
        scopes: {},
        scopeList: [],
        selectedScope: null
    }
}

export const mutations = {

    setSelectedScope(state, scopeId) {
        state.selectedScope = scopeId;
    },

    addScope(state, scope) {
        state.scopeList.push(scope.id);
        state.scopes[scope.id] = scope;
    },

    setScope(state, scope) {
        state.scopes[scope.id] = scope;
    }
}

export const actions = {

    fetchAll({state, dispatch}) {
        
        return this.$axios.$get('/api/scopes').then(scopes => {
            return Promise.all(
                scopes.map(scopeId => dispatch('fetchScope', scopeId))
            );
        });
    },

    fetchScope({commit}, scopeId) {
        
        var path = scopeId.split('.').join('/');

        return this.$axios.$get(`/api/scopes/${scopeId}`).then(scopeData => {
            
            commit('addScope', {
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