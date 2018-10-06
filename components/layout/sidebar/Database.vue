<template>
    <div>
        <TreeView :root="root"></TreeView>

        <TreeView :root="scopeNode"></TreeView>

        <TreeView :root="objectNode">
        </TreeView>
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

        createScopeNode(path, name, scope, icon) {

            var folders = [];
            var scopes = [];

            const keys = Object.keys(scope);

            if (keys.length == 0) {
                return {
                    icon: typeof icon != 'undefined' ? icon : ['far', 'file'],
                    name: name,
                    to: this.$routing.scopeURL('igiftcards', 'fr', path.join('.'))
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
                    to: this.$routing.objectURL('igiftcards', 'fr', this.selectedScope.id, path.join('.'))
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