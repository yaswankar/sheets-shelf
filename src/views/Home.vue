<template>
    <div>
        <main-layout>
            <div slot="main-content">
                Sample content
            </div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
    name: 'Home',
    components: {
        MainLayout
    }
}
</script>

<style>

</style>