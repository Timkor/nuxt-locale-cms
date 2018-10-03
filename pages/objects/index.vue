<template>

    <div>

        <TreeView :root="root">
            <template slot-scope="{name, value}">
                {{name}}
            </template>
        </TreeView>

    </div>
</template>
<script>
import TreeView from '~/components/TreeView';

export default {

    components: {
        TreeView
    },

    data() {
        return {

            root: {
                a: {
                    b: 'asd',
                    c: 13
                },
                d: 1
            }
        }
    }
}

</script>