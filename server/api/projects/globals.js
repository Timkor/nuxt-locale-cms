const globals = [
    'global/brands',
    'global/categories',
    'global/process',
    'global/form',
    'global/components',
    'global/buttons',
    'global/countries',
    'global/cart',
    'global/products',
    'global/giftcard',
    'global/footer',
    'global/error',
    'global/points'
],

export default {

    path: '/:projectId/globals',

    method: 'GET',

    call({projectId}) {

        return {
            globals: globals
        };
    }
}