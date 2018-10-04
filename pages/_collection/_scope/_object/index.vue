<template>

    <div>

        aaa

    </div>
</template>
<script>
import TreeView from '~/components/TreeView';

export default {
    layout: 'editor',

    components: {
        TreeView
    },

    data() {
        return {
            root: require('~/../igiftcards-web-2/locales/fr/global/brands.json')
        }
    },

    fetch({params, store}) {

        return store.dispatch('scopes/selectScope', params.scope);
    }
}

</script>