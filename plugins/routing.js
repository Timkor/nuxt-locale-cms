

export default ({app}, inject) => {

    inject('routing', {
        
        collectionURL(collection) {

            return {
                name: 'collection', 
                params: {
                    collection: collection,
                }
            };
        },

        languageURL(collection, language) {
            return {
                name: 'collection-language', 
                params: {
                    collection: collection, 
                    language: language,
                }
            };
        },

        scopeURL(collection, language, scope) {
            return {
                name: 'collection-language-scope', 
                params: {
                    collection: collection,
                    language: language,
                    scope: scope,
                }
            };
        },

        objectURL(collection, language, scope, object) {
            return {
                name: 'collection-language-scope-object', 
                params: {
                    collection: collection,
                    language: language,
                    scope: scope,
                    object: object,
                }
            };
        }
    })

}