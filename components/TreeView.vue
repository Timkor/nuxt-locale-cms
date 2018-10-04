<template>
    <div class='tree-view'>
        <TreeItem class='root' :path="rootHandle.path" :name="name" :value="rootHandle.value" :compute-children="getComputeChildren"></TreeItem>
    </div>
</template>
<script>

import TreeItem from '~/components/TreeItem';

class TreeItemHandle {
    path;
    name;
    value;

    constructor(path, name, value) {
        this.path = path;
        this.name = name;
        this.value = value;
    }
}

export default {
    
    name: 'TreeView',

    components: {
        TreeItem
    },

    props: {
        root: Object,
        name: String
    },

    computed: {

        rootHandle() {
            return new TreeItemHandle([], 'root', this.root);
        },

        getComputeChildren() {
            return (path, name, value) => {

                if (value instanceof Object) {
              

                    return Object.keys(value).map(key => new TreeItemHandle(
                        path.slice().concat([key]), 
                        key, 
                        value[key]
                    ));
                }

                return [];
            };
        }
    },

    methods: {
    }
}
</script>
<style lang="less">
    .tree-view {
        padding: 1rem;
        
    }
</style>