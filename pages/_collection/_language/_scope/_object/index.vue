<template>
    <div class="edit-page d-flex" style="flex-flow: column; height: 100%;">
        <h2>Location</h2>
        <div class="location">

            <b-badge variant="primary">COLLECTION</b-badge> 
            <nuxt-link :to="$routing.collectionURL(collection)">{{collection}}</nuxt-link>
            /
            <b-badge variant="primary">LANGUAGE</b-badge> 
            <nuxt-link :to="$routing.languageURL(collection, language)">FR</nuxt-link>
            /
            <b-badge variant="primary">SCOPE</b-badge> 
            <nuxt-link :to="$routing.scopeURL(collection, language, scope)">{{scope}}</nuxt-link>
            /
            <b-badge variant="primary">OBJECT</b-badge> 
            <nuxt-link :to="$routing.objectURL(collection, language, scope, object)">{{object}}</nuxt-link>
        </div>

        <h2 class="mt-3">Parameters</h2>
        None

        <h2 class="mt-3">Attributes</h2>
        <div>
            <b-badge variant="warning">TYPE</b-badge> Markdown
        </div>

        <h2 class="mt-3">Value</h2>
        <markdown-editor style="flex: 1 1 auto;">
        </markdown-editor>
        
    </div>
</template>
<script>
import TreeView from '~/components/TreeView';
import MarkdownEditor from '~/components/MarkdownEditor';

export default {
    layout: 'editor',

    components: {
        MarkdownEditor
    },

    data() {
        return {
            //root: require('~/../igiftcards-web-2/locales/fr/global/brands.json')
        }
    },

    asyncData({params}) {
        return params;
    },

    fetch({params, store}) {

        return store.dispatch('scopes/selectScope', params.scope);
    }
}

</script>
<style lang="less">
    .edit-page {

        .table {
            .row {
                padding: .25rem 0;
                .col-2 {
                    color: #7F828B;
                    text-align: right;
                }
            }
            
        }

        .location {
            & > div {
            }
        }
    }
</style>