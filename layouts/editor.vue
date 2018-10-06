<template>
<div>
    <div class="editor">
        <multipane class="custom-resizer" layout="vertical">
            
            <Navigation class="pane" />
            
            <Sidebar class="pane" />

            <multipane-resizer class="drop-left"></multipane-resizer>
            
            <div class="pane content" :style="{ flexGrow: 1 }">
                <nav class="menu"> 
                    Menu
                    <b-button style="margin: .8rem 1rem; background-color: #089c6d; border-color: #089c6d;" variant="primary" class="float-right">Save changes</b-button>
                </nav>
                <nuxt />
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
import Navigation from '~/components/layout/Navigation';
import Sidebar from '~/components/layout/Sidebar';

export default {

    components: {
        Logo,
        Navigation,
        Sidebar,
    },
}
</script>

<style lang="less">

body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    //'Open Sans', sans-serif;
    color: #445;
    font-size: 1rem;
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
            overflow: hidden;
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
    }

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
