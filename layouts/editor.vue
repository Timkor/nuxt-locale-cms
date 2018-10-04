<template>
<div>
    <div class="editor">
        <multipane class="custom-resizer" layout="vertical">
            <div class="pane sidebar">
                <div>
                    &nbsp;
                </div>
            </div>
            <div class="pane treeview">
                
                <TreeView :name="'COLLECTION VIEW'" :root="root">
                    <template slot-scope="{name, value}">
                        {{name}}
                    </template>
                </TreeView>

                <TreeView :name="'SCOPE VIEW'" :root="scopeRoot">
                    <template slot-scope="{name, value}">
                        {{name}}
                    </template>
                </TreeView>

                <TreeView :name="'OBJECT VIEW'" :root="selectedScope.data">
                </TreeView>
            </div>
            <multipane-resizer></multipane-resizer>
            <div class="pane">
                <div>
                    <h6 class="title is-6">Pane 2</h6>
                </div>
            </div>
            <multipane-resizer></multipane-resizer>
            <div class="pane" :style="{ flexGrow: 1 }">
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
            background: #f2f2f2;
            //border: 1px solid #ccc;
            box-shadow: inset 0 0 3px rgba(0,0,0,.5);
        }

        & > .sidebar {
            background-color: #333333;
            width: 3rem;
        }

        & > .treeview {
            background-color: #252526;

            .item .name {
                height: 1.5rem;
                line-height: 1.5rem;
            }

            .root > .name {

                &:before {
                    background-color: #383838;
                    position: absolute;
                    left: 0;
                    right: 0;
                    display: block;
                    content: ' ';
                    height: 1.5rem;
                    z-index: -1;
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
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
        }

        &:hover {
            &:before {
                border-color: #999;
            }
        }
    }
}
</style>
