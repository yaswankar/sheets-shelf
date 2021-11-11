<template>
    <div>
        <component :is="fileType" :fileName="fileName" />
    </div>
</template>

<script>
import Grid from './FileViews/Grid.vue'
export default {
    name: 'TemplateFile',
    props: ['fileType', 'fileName'],
    components: {
        Grid
    },
    methods: {
    }
}
</script>

<style>

</style>