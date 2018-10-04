<template>
<div>
    <div class="editor">
        <multipane class="custom-resizer" layout="vertical">
            <div class="pane sidebar">
                <div>
                    <div class="item" title="To Do">
                        <fa class="icon" :icon="['fas', 'list']"></fa>
                    </div>
                    <div class="item" title="Routing">
                        <fa class="icon" :icon="['fas', 'route']"></fa>
                    </div>
                    <div class="item active" title="Database">
                        <fa class="icon" :icon="['fas', 'database']"></fa>
                    </div>
                    <div class="item" title="Search">
                        <fa class="icon" :icon="['fas', 'search']"></fa>
                    </div>
                    <div class="item" title="Source control">
                        <fa class="icon" :icon="['fas', 'code-branch']"></fa>
                    </div>
                    <div class="item" title="Settings">
                        <fa class="icon" :icon="['fas', 'cog']"></fa>
                    </div>
                </div>
            </div>
            <div class="pane treeview">
                
                <TreeView :name="'Collection view'" :root="root">
                    <template slot-scope="{name, value}">
                        {{name}}
                    </template>
                </TreeView>

                <TreeView :name="'Scope view'" :root="scopeRoot">
                    <template slot-scope="{name, value}">
                        {{name}}
                    </template>
                </TreeView>

                <TreeView :name="'Object view'" :root="selectedScope.data">
                </TreeView>
            </div>
            <multipane-resizer></multipane-resizer>
            
            <div class="pane content" :style="{ flexGrow: 1 }">
                <div>
                    <h6 class="title is-6">Pane 3</h6>
                </div>
            </div>
        </multipane>

    </div>
    <nuxt />
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

import TreeView from '~/components/TreeView';

export default {

    components: {
        TreeView
    },

    data() {
        return {
            root: {

            }
        }
    },

    computed: {
        ...mapGetters({
            scopes: 'scopes/scopes',
            selectedScope: 'scopes/selectedScope'
        }),

        scopeRoot() {
            var scopeRoot = {};

            this.scopes.forEach(scope => {

                var current = scopeRoot;

                scope.id.split('.').forEach(part => {
                    current = (current[part] = current[part] || {});
                })

                Object.assign(scope);
            })

            return scopeRoot;
        }
    }
}
</script>

<style lang="less">

body {
    font-family: 'Open Sans', sans-serif;
}

.editor {

    

    //background-color: #e0e0e0;

    .tree-view {}

    .custom-resizer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        & > .pane {
            text-align: left;
            padding: 15px;
            overflow: hidden;

            //border: 1px solid #ccc;
            
        }

        & > .sidebar {
            background-color: #193754;
            width: 4rem;
            padding: 0;
            padding-top: 1rem;

            .item {
                width: 4rem;
                height: 3rem;
                text-align: center;
                line-height: 3rem;
                color: rgba(255, 255, 255, .6);
                font-size: 1.5rem;

                &:hover, &.active {
                    color: white;
                }
            }
        }

        & > .treeview {
            box-shadow: -3px 0 10px rgba(0,0,0,.25);
            background-color: #204065;

            .item .name {
                height: 1.5rem;
                line-height: 1.5rem;

            }

            .root > .name {
                
                &:before {
                    background-color: lighten(#204065, 10%);
                    position: absolute;
                    left: 0;
                    right: 0;
                    display: block;
                    content: ' ';
                    height: 1.5rem;
                    z-index: -1;
                    box-shadow: 0 1px 3px rgba(0,0,0,.5);
                }

                color: white;
            }
        }
    }

    .custom-resizer>.pane~.pane {}

    .custom-resizer>.multipane-resizer {
        margin: 0;
        left: 0;
        position: relative;
        box-shadow: -3px 0 5px rgba(0,0,0,.5);

        &:before {
            display: block;
            content: "";
            width: 3px;
            height: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -20px;
            margin-left: -1.5px;
        }

        &:hover {
            &:before {
                border-color: #999;
            }
        }
    }
}
</style>
