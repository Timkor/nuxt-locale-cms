<template>
    <div class="navigation"> 
        <div class="item mb-1">
            <logo></logo>
        </div>
        
        <div class="item" @click="selectItem(item)" :class="{active: item === selectedItem}" :title="item.title" v-for="item in items" :key="item.id">
            <fa class="icon" :icon="['fas', item.icon]"></fa>
        </div>
    </div>
</template>
<script>
    
    import {mapGetters, mapActions} from 'vuex';

    import Logo from '~/components/Logo';


    export default {

        components: {
            Logo
        },

        computed: {
            ...mapGetters({
                items: 'navigation/items',
                selectedItem: 'navigation/selectedItem'
            }),
        },

        methods: {
            ...mapActions({
                selectItem: 'navigation/selectItem'
            })
        }
    }

</script>
<style lang="less">

    .navigation {
        background-color: #193754;
        width: 4rem;
        padding: 0;

        .item {
            width: 4rem;
            height: 3rem;
            text-align: center;
            line-height: 3rem;
            color: rgba(255, 255, 255, .6);
            font-size: 1.5rem;

            &:hover, &.active {
                color: white;
            }

            &:first-child {
                height: 4rem;
            }
        }
    }
    
</style>