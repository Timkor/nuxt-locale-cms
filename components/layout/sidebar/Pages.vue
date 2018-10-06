<template>

    <div>
        <TreeView :name="'Scope view'" :root="rootNode"></TreeView>
    </div>
    
    
</template>
<script>
    
    import TreeView from '~/components/TreeView';


    const routes = [
        {
            name: 'index',
            path: '/'
        },
        {
            name: 'brand',
            path: '/:brand'
        },
        {
            name: 'brand-giftcard',
            path: '/:brand/giftcard'
        },
        {
            name: 'service',
            path: '/service',
        },
        {

        }
    ]

    export default {
        
        components: {
            TreeView
        },

        computed: {

            rootNode() {
                return {
                    name: 'Pages',
                    children: routes.map(route => {
                        return {
                            name: route.path,
                            icon: ['far', 'file']
                        }
                    })
                }
            }
        }
    }

</script>