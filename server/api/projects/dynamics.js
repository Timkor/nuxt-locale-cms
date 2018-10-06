

const dynamics = [
    {
        id: 0,
        name: 'brand',
        scope: 'brands/:brand',
    },
    {
        id: 1,
        name: 'brand-giftcard',
        scope: 'products/:brand',
    },
    {
        id: 2,
        name: 'manual-brand',
        scope: 'manuals/:brand',
    }
];

export default {

    path: '/:projectId/dynamics',

    method: 'GET',

    call({projectId}) {
        return {
            dynamics: dynamics
        };
    }
}