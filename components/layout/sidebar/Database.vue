<template>
    <div class="d-flex" style="flex: 1 1 auto; flex-direction: column;">
        <!--<TreeView :root="root"></TreeView>-->

        <TreeView :root="scopeNode" @select="onSelectScope" style="flex: 1 1 50%; overflow: auto; max-height: 50%" />
        <TreeView :root="objectNode" @select="onSelectObject" :initial-depth="3" style="flex: 1 1 50%; overflow: auto; height: 50%" />
    </div>
</template>
<script>

    import {mapGetters, mapActions} from 'vuex';
    
    import TreeView from '~/components/TreeView';

    export default {
        components: {
            TreeView
        },

        computed: {
            ...mapGetters({
                scopes: 'scopes/scopes',
                selectedScope: 'scopes/selectedScope'
            }),

            root() {
                return {
                    name: 'Collections',
                    
                }
            },
            
            scopeNode() {
                var scopeRoot = {};

                this.scopes.forEach(scope => {
                    
                    var current = scopeRoot;

                    scope.id.split('.').forEach(part => {
                        current = (current[part] = current[part] || {});
                    })

                    Object.assign(scope);
                })



                return this.createScopeNode([], 'Scopes', scopeRoot, null);
            },

            objectNode() {

                if (this.selectedScope) {
                    return this.createObjectNode([], 'Objects', this.selectedScope.data, null);
                }

                return {
                    name: 'Objects',
                };
            }
    },

    methods: {

        ...mapActions({
            selectScope: 'scopes/selectScope'
        }),

        onSelectScope(node) {
            if (node) {

                this.selectScope(node.scope);

                this.$router.push(
                    this.$routing.scopeURL('igiftcards', 'fr', node.scope)
                );
            }
        },

        onSelectObject(node) {

            if (node) {

                this.$router.push(
                    this.$routing.objectURL('igiftcards', 'fr', this.selectedScope.id, node.object)
                )
            }
        },

        createScopeNode(path, name, scope, icon) {

            var folders = [];
            var scopes = [];

            const keys = Object.keys(scope);

            if (keys.length == 0) {
                return {
                    icon: typeof icon != 'undefined' ? icon : ['far', 'file'],
                    name: name,
                    scope: path.join('.'),
                }
            }

            keys.sort().forEach(name => {

                var childNode = this.createScopeNode([...path, name], name, scope[name]);

                if (!childNode.children) {
                    scopes.push(childNode);
                } else {
                    folders.push(childNode);
                }
            });

            return {
                icon: typeof icon != 'undefined' ? icon : ['fas', 'folder'],
                name: name,
                children: [...folders, ...scopes]
            }
        },

        createObjectNode(path, name, object, icon) {

            var folders = [];
            var scopes = [];

            const keys = Object.keys(object);

            if (typeof object == 'string') {
                return {
                    icon: typeof icon != 'undefined' ? icon : ['far', 'circle'],
                    name: name,
                    object: path.join('.'),
                }
            }

            keys.sort().forEach(name => {

                var childNode = this.createObjectNode([...path, name], name, object[name]);

                if (!childNode.children) {
                    scopes.push(childNode);
                } else {
                    folders.push(childNode);
                }
            });

            return {
                icon: typeof icon != 'undefined' ? icon : ['fas', 'cube'],
                name: name,
                children: [...folders, ...scopes]
            }
        },
    }
    }

</script>