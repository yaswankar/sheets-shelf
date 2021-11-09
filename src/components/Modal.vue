<template>
    <div class="modal-vue">
        <div class="overlay" @click="$emit('close-modal')"></div>
        <div class="modal" :style="getStyle">
            <button class="close" @click="$emit('close-modal')"><i class="fas fa-times"></i></button>
            <slot name="modal-content" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        width: Number,
        height: Number
    },
    computed: {
        getStyle() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-vue {
    .overlay {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }
}

.modal-vue {
    .modal {
        position: absolute;
        width: 300px;
        z-index: 9999;
        margin: 0 auto;
        padding: 20px 30px;
        background-color: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

.modal-vue {
    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 18px;
        color:#ccc;
        background: #fff;
        border: none;
        &:focus {
            outline: none;
        }
        &:hover {
            color: gray;
        }
    }
}
</style>