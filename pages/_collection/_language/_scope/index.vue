<template>
    <div>
        Language View
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
    layout: 'editor',

    

    fetch({params, store}) {
        return store.dispatch('scopes/selectScope', params.scope);
    }
}

</script>