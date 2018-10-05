<template>
    <div class="markdown-editor">
        <div ref="tui" class="tui-editor"></div>
    </div>
</template>
<script>



    export default {

        props: {
            value: {
                type: String,
                default: ''
            }
        },

        mounted() {
            this.$createTuiEditor(this.$refs.tui, this.value);
        }
    }

</script>
<style lang="less">
    .markdown-editor {
        
        position:relative;

        .tui-editor {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
</style>