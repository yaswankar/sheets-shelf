<template>
    <div class="options-bar">
        <div class="left-section">
            <button>File</button>
            <button>Automation</button>
            <button>Forms</button>
            <button class="add-row" @click="$emit('add-row')">Add Row</button>
        </div>
        <div class="mid-section">
            <i class="far fa-file"></i>
            <button v-if="!editName" @click="focusInput">{{fileName}}</button>
            <input v-if="editName" @blur="blurInput" type="text" v-model="file">
        </div>
        <div class="right-section">
            <button>
                <i class="fas fa-users"></i>
                <span>Share</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionsHeader',
    props: ['fileName'],
    data() {
        return {
            file: '',
            editName: false
        };
    },
    computed: {
        getFileName() {
            return this.fileName;
        }
    },
    watch: {
        fileName(newVal) {
            this.file = newVal;
        }
    },
    methods: {
        focusInput() {
            this.editName = true;
        },
        blurInput() {
            this.editName = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.options-bar {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    .left-section {
        display: inline;
        float: left;
        button {
            background: #fff;
            font-size: 14px;
            margin-left: 10px;
            border: none;
            height: 30px;
            &:hover {
                background: rgb(244,244,244);
            }
            &:focus {
                background: rgb(244,244,244);
                outline: none;
            }
        }
        .add-row {
            border: 2px solid #15a3a3;
            border-radius: 4px;
            color: #15a3a3;
            margin-left: 40px;
            &:hover {
                color: #fff;
                background: #15a3a3;
                transition: all 0.5s;
                cursor: pointer;
            }
        }    
    }
    .mid-section {
        min-width: 150px;
        display: inline;
        margin: 0 auto;
        font-size: 24px;
        button {
            height: 30px;
            color: #444;
            background: #fff;
            border: none;
            font-weight: bold;
            font-size: 22px;
            margin-left: 5px;
            max-width: 200px;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:hover {
                background: #f4f4f4;
                transition: all 0.5s;
            }
        }
        input {
            height: 25px;
            color: #444;
            padding-left: 5px;
            background: #fff;
            border: 2px solid rgb(190, 188, 188);
            border-radius: 4px;
            font-weight: bold;
            font-size: 22px;
            margin-left: 5px;
            transition: all 0.5s;
        }
    }
    .right-section {
        display: inline;
        float: right;
        margin-right: 15px;
        button {
            height: 35px;
            width: 80px;
            padding: 5px;
            color: white;
            background: #15a3a3;
            font-weight: bold;
            border: 1px solid #15a3a3;
            border-radius: 4px;
            &:hover {
                background: #0f7575;
                transition: all 0.5s;
            }
            span {
                margin-left: 5px;
            }
        }
    }
}
</style>