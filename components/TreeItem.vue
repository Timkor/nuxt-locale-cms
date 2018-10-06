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
            <TreeItem @select="onSelect" v-for="(child) in children" :key="child.name" :path="[...path, child.name]" :node="child" :initialDepth="initialDepth"></TreeItem>
        </div>
    </div>
</template>
<script>

    export default {
        
        name: 'TreeItem',

        props: {
            path: Array,
            node: Object,
            initialDepth: Number
        },

        data() {
            return {
                open: this.path.length < this.initialDepth,
                selected: false
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
                    
                    this.$emit('select', this);
                }
            },

            onSelect(that) {
                this.$emit('select', that);
            }
        },

        computed: {

            classes() {
                return [
                    this.children && this.children.length ? 'composite' : 'leaf',
                    this.open ? 'open' : 'closed',
                    this.selected ? 'selected' : 'unselected'
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