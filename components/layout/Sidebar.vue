<template>
    <div class="sidebar d-flex" style="flex-direction: column;">
        <h1>
            Translate
        </h1>
        <component :is="navigationComponent" />
    </div>
</template>
<script>
    import Database from '~/components/layout/sidebar/Database';
    import Pages from '~/components/layout/sidebar/Pages';

    import {mapGetters} from 'vuex';

    const mapComponent = {
        'database': Database,
        'pages': Pages,
    }

    export default {

        computed: {

            ...mapGetters({
                selectNavigationItem: 'navigation/selectedItem'    
            }),

            navigationComponent() {
                return mapComponent[this.selectNavigationItem.id];
            }
        }
    }
</script>
<style lang="less">
    .sidebar {

        box-shadow: -1px 0 3px rgba(0,0,0,.25);
        background-color: #204065;
        padding: 0;
        padding-left: 1rem;
        width: 30vw;
        
        overflow-x: hidden;
        overflow-y: scroll;
        white-space: nowrap;

        &::-webkit-scrollbar { 
            display: none; 
        }

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

        .item.selected {
        
            & > .name {
                &:before {
                    background-color: #008cff;
                    position: absolute;
                    left: 0;
                    right: 0;
                    display: block;
                    content: ' ';
                    height: 1.5rem;
                    z-index: -2;
                    //box-shadow: 0 1px 3px rgba(0,0,0,.5);
                }
            }
        }

        .item, .item.select {
            
            &.root > .name {
            
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
</style>