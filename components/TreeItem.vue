<template>
    <div class="item">
        <div class="name">
            {{name}}
        </div>
        <div class="children" v-if="children.length">
            <TreeItem v-for="(child) in children" :key="child.key" :path="child.path" :name="child.name" :value="child.value" :compute-children="computeChildren"></TreeItem>
        </div>
    </div>
</template>
<script>

    export default {
        
        name: 'TreeItem',

        props: {
            path: Array,
            name: String,
            value: [Object, String, Number],

            computeChildren: {
                type: Function,
                required: true
            }
        },

        computed: {
            children() {
                return this.computeChildren(this.path, this.name, this.value);
            }
        }
    }

</script>
<style lang="less">
    
    .item {
        .name {

        }

        .children {
            margin-left: 1rem;    
        }
    }   

</style>