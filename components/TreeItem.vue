<template>
    <div class="item" :class="classes">
        <div class="name" @click="select">
            <div class='caret'>
                <fa class="icon" :icon="['fas', 'caret-right']"></fa>
            </div>
            <div class='type' v-if="icon">
                <fa class="icon" :icon="icon"></fa>
            </div>
            {{name}}
        </div>
        <div class="children" v-if="open && children">
            <TreeItem v-for="(child) in children" :key="child.name" :path="[...path, child.name]" :node="child" @click="bubbleClick($event)"></TreeItem>
        </div>
    </div>
</template>
<script>

    export default {
        
        name: 'TreeItem',

        props: {
            path: Array,
            node: Object
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
                
                if (this.children && this.children.length) {
                    
                    this.toggle();

                } else {
                    if (this.to) {
                        this.$router.push(this.to);
                    }
                }
            }
        },

        computed: {

            classes() {
                return [
                    this.children && this.children.length ? 'composite' : 'leaf',
                    this.open ? 'open' : 'closed',
                    this.active ? 'active' : 'inactive'
                ];
            },

            icon() {
                return this.node.icon;
            },

            name() {
                return this.node.name;
            },

            children() {
                return this.node.children;
            },

            to() {
                return this.node.to;
            },

            active() {
                console.log(this.$route.path);
                return this.to == this.$route.path;  
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
            
        }

        .children {
            margin-left: 1rem;    
        }
    }   

</style>