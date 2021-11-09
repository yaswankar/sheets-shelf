<template>
    <div class="modal-text">
        <div class="inp-container">
            <div class="inp-title">Enter the Sheet name</div>
            <input type="text" v-model="tempName"/>
            <div v-if="error" class="err-msg">sheet name required*</div>
        </div>
        <div class="action-container">
            <button class="btn cancel" @click="close">Cancel</button>
            <button class="btn yes" @click="checkName">Yes</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateTemplateModal',
    data() {
        return {
            tempName: '',
            error:false
        };
    },
    watch: {
        tempName(newVal, oldVal) {
            if(oldVal === '' && newVal !== '') this.error = false;
        }
    },
    methods: {
        checkName() {
            this.error = this.tempName === ''?true:false;
            if(!this.error) {
                this.close();
            }
        },
        close() {
            this.$emit('close-modal', this.tempName);
            this.error = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-text {
    text-align: left;
    .inp-container {
        width: 100%;
        margin-top: 20px;
        height: 90px;
        .inp-title {
            font-size: 16px;
            font-weight: 600;
        }
        input {
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            height: 30px;
            width: 100%;
            padding: 0 10px;
            &:focus {
                outline: 2px solid #09f;
            }
        }
        .err-msg {
            color: rgb(252, 93, 93);
            font-weight: bold;
            margin-top: 5px;
            font-size: 13px;
        }
    }
    .action-container {
        margin-top: 30px;
        float: right;
        .btn {
            height: 35px;
            width: 85px;
            border: none;
            &:focus {
                outline: none;
            }
            &:hover {
                cursor: pointer;
            }
        }
        .yes {
            margin-left: 15px;
            background: rgb(3, 104, 199);
            color: #fff;
            font-weight: bold;
        }
        .cancel {
            background: lightslategray;
            color: #fff;
            font-weight: bold;
        }
    }
}
</style>