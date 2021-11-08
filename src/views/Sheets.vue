<template>
    <div>
        <main-layout>
            <div class="main-container" slot="main-content">
                <div class="title"><i class="fas fa-folder"></i><span>Sheets</span></div>
                <div class="selectors">
                    <input type="checkbox" v-model="allSelected"/>
                    <button class="actions-dropdown">
                        <span>Actions</span>
                        <i class="fas fa-caret-down"></i>
                    </button>
                    <button :class="['delete', {'disabled': !allSelected}]">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
    name: 'Sheets',
    data() {
        return {
            allSelected: false
        }
    },
    components: {
        MainLayout
    }
}
</script>

<style lang="scss">
:root {
    --icon-color: gray;
}
.main-container {
    text-align: left;
    padding: 12px 20px;
    .title {
        height: 40px;
        font-size: 18px;
        box-sizing: border-box;
        padding: 5px 0;
        .fa-folder {
            color: var(--icon-color);
        }
        span {
            margin-left: 10px;
            font-weight: bolder;
            color: #4d4d4d;
        }
    }
    .selectors {
        .actions-dropdown {
            .fas {
                color: var(--icon-color);
                margin-left: 10px;
            }
        }
        .delete, .actions-dropdown {
            border: 1px solid #ccc;
            color: #161616;
            height: 30px;
            padding: 0 10px;
            margin-left: 10px;
            .fas {
                color: var(--icon-color);
            }
            &:hover {
                background-color: #C3C3C3;
                border-color: #C3C3C3;
            }
        }
        .disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
}
</style>