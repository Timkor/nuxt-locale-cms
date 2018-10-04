
export const state = () => {
    return {
        objects: {},
        objectList: [],
        selectedObject: null
    }
}

export const mutations = {

    setSelectedObject(state, object) {
        state.selectedObject = object;
    }
}

export const actions = {

    selectObject({commit}, path) {
        
    }
}

export const getters = {

    objects(state) {
        return state.objectList.map(objectId => objects[objectId]);
    },

    selectedObject(state) {
        return state.objects[state.selectedObject];
    }
}