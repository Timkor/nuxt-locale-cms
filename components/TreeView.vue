<template>
    <div class='tree-view'>
        <TreeItem class='root' :path="[]" :node="root"></TreeItem>
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

    },

    methods: {
    }
}
</script>
<style lang="less">
    .tree-view {
        //padding: 1rem;
        
    }
</style>