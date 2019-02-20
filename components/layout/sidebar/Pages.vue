<template>

    <div>
        <TreeView :root="pagesNode" @select="onSelectPage"></TreeView>
        <TreeView :root="dynamicsNode" @select="onSelectDynamic"></TreeView>
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
                            route: route.name,
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
        },

        methods: {

            onSelectPage(node) {
                console.log('dd')
                var route = this.$routing.pageURL('igiftcards', 'fr', node.route);

                this.$router.push(route);
            },

            onSelectDynamic(node) {

            }
        }
    }

</script>