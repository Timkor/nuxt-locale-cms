export default {

    path: '/:projectId/routes',

    method: 'GET',

    call() {

        const routes = [
            {
                name: 'index',
                path: '/'
            },
            {
                name: 'brand',
                path: '/:brand',
                params: {
                    brand: 'Brand'
                },
            },
            {
                name: 'brand-giftcard',
                path: '/:brand/giftcard',
                params: {
                    brand: 'Brand'
                },
            },
            {
                name: 'cart',
                path: '/cart'
            },
            {
                name: 'checkout',
                path: '/checkout',
            },
            {
                name: 'points',
                path: '/points',
            },
            {
                name: 'return',
                path: '/return',
            },
            {
                name: 'manual-index',
                path: '/manual',
            },
            {
                name: 'manual-brand',
                path: '/manual/:brand',
                params: {
                    brand: 'Brand'
                },
            },
            {
                name: 'manual-delivery',
                path: '/manual/delivery',
            },
            {
                name: 'news',
                path: '/news',
            },
            {
                name: 'news-article',
                path: '/news/:article',
            }
        ];
        
        return {
            routes: routes
        };
    }
}