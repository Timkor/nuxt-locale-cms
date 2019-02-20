export const state = () => {

    return {

        globals: {},
        globalList: [],
        dynamics: {},
        dynamicList: [],

    };
}

export const mutations = {

    addGlobal(state, scope) {

        state.globals[scope.id] = scope;

        state.globalList.push(scope.id);
    },

    addDynamic(state, dynamic) {

        state.dynamics[dynamic.id] = dynamic;

        state.dynamicList.push(dynamic.id);
    }
}

export const actions = {

    fetchGlobals({commit}) {
        
        return this.$axios.$get('/api/projects/igiftcards/globals').then(({globals}) => {
            globals.forEach(global => {
                commit('addGlobal', global);
            });
        });
    },

    fetchDynamics() {

    },

}

export const getters = {

    globals(state) {
        return state.globalList.map(globalId => state.globals[globalId]);
    },

    dynamics(state) {
        return state.dynamicList.map(dynamicId => state.dynamics[dynamicId]);
    }
}