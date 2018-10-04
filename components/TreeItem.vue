<template>
    <div class="item">
        <div class="name" @click="select">
            {{name}}
        </div>
        <div class="children" v-if="open && children.length">
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

        data() {
            return {
                open: this.path.length < 2
            }
        },

        methods: {
            
            toggle() {
                this.open = !this.open;
            },

            select() {
                
                if (this.children.length) {
                    
                    this.toggle();

                } else {
                    console.log('a')
                    this.$router.push(this.route);
                }
            }
        },

        computed: {
            children() {
                return this.computeChildren(this.path, this.name, this.value);
            },

            route() {
                return {
                    name: 'collection-scope-object',
                    params: {
                        scope: 'global.brands',
                        object: this.path.join('.')
                    } 
                };
            }
        }
    }

</script>
<style lang="less">
    
    .item {

        user-select: none;
        cursor: pointer;
        
        .name {
            color: rgba(255, 255, 255, .8);
            font-size: .8rem;
        }

        .children {
            margin-left: 1rem;    
        }
    }   

</style>