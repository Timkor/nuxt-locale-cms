<template>
    <div class='tree-view'>
        <TreeItem class='root' @select="onSelect" :path="[]" :node="root" :initialDepth="initialDepth"></TreeItem>
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

    data() {
        return {
            selectedItem: null
        };
    },

    props: {
        root: Object,
        name: String,
        initialDepth: {
            type: Number,
            default: 1
        }
    },

    computed: {

    },

    methods: {
        onSelect(item) {

            if (this.selectedItem) {
                this.selectedItem.selected = false;
            }

            this.selectedItem = item;
            this.selectedItem.selected = true;

            this.$emit('select', item.node);
        }
    }
}
</script>
<style lang="less">
    .tree-view {
        //padding: 1rem;
        
    }
</style>