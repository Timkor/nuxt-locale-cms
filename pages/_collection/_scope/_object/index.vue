<template>

    <div class="edit-page">
        <b-row>
            <b-col cols=2>
                
            </b-col>
            <b-col>
                <h1>Edit object</h1>
            </b-col>
        </b-row>

        <div class="mb-4 table">

            <b-row>
                <b-col cols=2>
                    
                </b-col>
                <b-col>
                    <h2>Location</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols=2>
                    Object
                </b-col>
                <b-col>
                    {{object}}
                </b-col>
            </b-row>

            <b-row>
                <b-col cols=2>
                    Scope
                </b-col>
                <b-col>
                    {{scope}}
                </b-col>
            </b-row>

            <b-row>
                <b-col cols=2>
                    Collection
                </b-col>
                <b-col>
                    {{collection}}
                </b-col>
            </b-row>

            <b-row>
                <b-col cols=2>
                    Language
                </b-col>
                <b-col>
                    FR
                </b-col>
            </b-row>

            <b-row>
                <b-col cols=2>
                    
                </b-col>
                <b-col>
                    <h2>Parameters</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols=2>
                    
                </b-col>
                <b-col>
                    
                </b-col>
            </b-row>


            <b-row>
                <b-col cols=2>
                    
                </b-col>
                <b-col>
                    <h2>Attributes</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols=2>
                    Type
                </b-col>
                <b-col>
                    <b-badge variant="warning">Markdown</b-badge>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols=2>
                    Value
                </b-col>
                <b-col>
                    <markdown-editor></markdown-editor>
                </b-col>
            </b-row>
        </div>

        
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
    }
</style>