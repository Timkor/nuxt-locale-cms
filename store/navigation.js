export const state = () => {
    return {
        items: [
            {
                id: 'todo',
                title: 'To Do',
                icon: 'list',
            },
            {
                id: 'pages',
                title: 'Pages',
                icon: 'file',
            },
            {
                id: 'database',
                title: 'Database',
                icon: 'database'
            },
            {
                id: 'search',
                title: 'Search',
                icon: 'search',
            },
            {
                id: 'changes',
                title: 'Changes',
                icon: 'code-branch',
            },
            {
                id: 'settings',
                title: 'Settings',
                icon: 'cog',
            }

        ],

        selectedItem: 'database'
    }
}

export const mutations = {

    setSelectedItem(state, itemId) {
        state.selectedItem = itemId;
    }
}

export const actions = {

    selectItem({commit}, item) {
        commit('setSelectedItem', item.id || item);
    },

    async nuxtServerInit ({dispatch}) {
        
        await dispatch('scopes/fetchAll');
    }
}

export const getters = {

    items(state) {
        return state.items;
    },

    selectedItem(state) {
        return state.items.find(item => item.id === state.selectedItem)
    }
}