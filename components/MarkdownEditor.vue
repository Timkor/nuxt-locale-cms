<template>
    <div style="height: 80vh">
        <div ref="tui"></div>
    </div>
</template>
<script>



    export default {

        mounted() {
            this.$createTuiEditor(this.$refs.tui);
        }
    }

</script>