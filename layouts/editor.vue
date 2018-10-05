<template>
<div>
    <div class="editor">
        <multipane class="custom-resizer" layout="vertical">
            <div class="pane sidebar">
                <div>
                    <div class="item mb-1">
                        <logo></logo>
                    </div>
                    <div class="item" title="To Do">
                        <fa class="icon" :icon="['fas', 'list']"></fa>
                    </div>
                    <div class="item" title="Pages">
                        <fa class="icon" :icon="['fas', 'file']"></fa>
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
                <h1>
                    Translate
                </h1>
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
            <multipane-resizer class="drop-left"></multipane-resizer>
            
            <div class="pane content" :style="{ flexGrow: 1 }">
                <nav class="menu"> 
                    Menu

                    <b-button style="margin: .8rem 1rem; background-color: #089c6d; border-color: #089c6d;" variant="primary" class="float-right">Save changes</b-button>
                </nav>
                <nuxt />
            </div>

            <multipane-resizer class="drop-right"></multipane-resizer>
            <div class="pane info">
                &nbsp;
            </div>
        </multipane>
    </div>
    
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

import Logo from '~/components/Logo';
import TreeView from '~/components/TreeView';

export default {

    components: {
        Logo,
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
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    //'Open Sans', sans-serif;
    color: #445;
    font-size: .8rem;
}

h1 {
    font-size: 1.5rem;
    color: #204065;
}

h2 {
    font-size: 1.25rem;
    color: #2a598f;
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

                &:first-child {
                    height: 4rem;
                }
            }
        }

        & > .treeview {
            box-shadow: -1px 0 3px rgba(0,0,0,.25);
            background-color: #204065;
            padding: 0;
            padding-left: 1rem;
            
            overflow-x: hidden;
            white-space: nowrap;

            h1 {
                color: #5dd7ff;// #00ff9e;
                opacity: .9;
                height: 4rem;
                line-height: 4rem;
                margin: 0;
            }

            & > .tree-view {
            }
            
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

        & > .content {
            background-color: #F7F8FB;
            color: #47494E;
            z-index: 3;
            @fill-color: #DBE1EC;
            overflow: visible;

            .menu {
                background-color: white;
                position: absolute;
                top: 0;
                left: -10px;
                right: -10px;
                height: 4rem;
                z-index: 3;
                box-shadow: 0 1px 3px rgba(0,0,0,.25);
                padding-left: 2rem;
                line-height: 4rem;
            }

            padding-top: 5rem;
        }

        & > .info {
            z-index: 1;
            background-color: #204065;
            width: 200px;
        }
    }

    .custom-resizer>.pane~.pane {}

    .custom-resizer>.multipane-resizer {
        margin: 0;
        left: 0;
        position: relative;
        z-index: 2;
        background-color: #F7F8FB;
        width: 10px;
        &.drop-left{
            box-shadow: -1px 0 3px rgba(0,0,0,.25);
        }

        &.drop-right {
            box-shadow: 1px 0 3px rgba(0,0,0,.25);
        }

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
