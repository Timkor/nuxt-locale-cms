<template>
    <div class="item" :class="classes">
        <div class="name" @click="select">
            <div class='caret'>
                <fa class="icon" :icon="['fas', 'caret-right']"></fa>
            </div>
            <div class='type'>
                <fa class="icon" :icon="['fas', 'folder']"></fa>
            </div>
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

            classes() {
                return [
                    this.children.length ? 'composite' : 'leaf',
                    this.open ? 'open' : 'closed'
                ];
            },

            children() {
                return this.computeChildren(this.path, this.name, this.value);
            },

            route() {
                return {
                    name: 'collection-language-scope-object',
                    params: {
                        collection: 'shared',
                        language: 'fr',
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
            .caret {
                width: .5rem;
                display: inline-block;
                text-align: center;


            }

            & > .type {
                width: 1rem;
                display: inline-block;
                text-align: center;
            }
        }
        
        &.open {
            & > .name .caret {
                transform: rotate(90deg);
            }
        }

        &.leaf {
            .name .caret {
                visibility: hidden;
            }
        }

        .name {
            color: rgba(255, 255, 255, .8);
            font-size: .8rem;
        }

        .children {
            margin-left: 1rem;    
        }
    }   

</style>