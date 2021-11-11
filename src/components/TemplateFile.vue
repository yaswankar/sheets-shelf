<template>
    <div>
        <component :is="fileType" />
    </div>
</template>

<script>
import Grid from './FileViews/Grid.vue'
export default {
    name: 'TemplateFile',
    props: ['fileType'],
    components: {
        Grid
    }
}
</script>

<style>

</style>