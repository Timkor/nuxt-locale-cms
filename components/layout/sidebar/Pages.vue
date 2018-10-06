<template>

    <div>
        <TreeView :root="pagesNode"></TreeView>
        <TreeView :root="dynamicsNode"></TreeView>
    </div>
    
    
</template>
<script>
    import {mapGetters} from 'vuex';

    import TreeView from '~/components/TreeView';

    export default {
        
        components: {
            TreeView
        },

        computed: {

            ...mapGetters({
                routes: 'routes/routes'
            }),

            pagesNode() {
                return {
                    name: 'Pages',
                    children: this.routes.map(route => {
                        return {
                            name: route.path,
                            icon: ['far', 'file']
                        }
                    })
                }
            },

            dynamicsNode() {
                return {
                    name: 'Dynamics'
                }
            }
        }
    }

</script>