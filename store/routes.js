
export const state = () => {
    return {
        routes: {},
        routeList: [],
        selectedRoute: null
    }
}

export const mutations = {

    setSelectedRoute(state, routeName) {
        state.selectedRoute = routeName;
    },

    addRoute(state, route) {
        state.routeList.push(route.name);
        state.routes[route.name] = route;
    },

    setRoute(state, route) {
        state.routes[route.name] = route;
    }
}

export const actions = {

    fetchAll({state, commit}) {
        
        return this.$axios.$get('/api/projects/igiftcards/routes').then(routes => {
            routes.forEach(route => {
                commit('addRoute', route);
            });
        });
    },


    selectRoute({dispatch, commit}, routeName) {
        return commit('setSelectedRoute', routeName);
    }
}

export const getters = {

    selectedRoute(state) {
        return state.routes[state.selectedRoute];
    },

    routes(state) {
        return state.routeList.map(routeName => state.routes[routeName]);
    }
}