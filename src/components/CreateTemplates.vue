<template>
    <main-layout>
        <div class="temp-container" slot="main-content">
            <div class="title-container" v-if="!openFile">
                <div class="title">Create</div>
                <div class="description">Start a new sheet, grid or project</div>
                <div class="image-container">
                    <div class="container container-1" @click="selectTemplate('Grid')">
                        <div class="image"></div>
                        <div class="context">Grid</div>
                    </div>
                    <div class="container container-2" @click="selectTemplate('Project')">
                        <div class="image"></div>
                        <div class="context">Project</div>
                    </div>
                    <div class="container container-3" @click="selectTemplate('Cards')">
                        <div class="image"></div>
                        <div class="context">Cards</div>
                    </div>
                    <div class="container container-4" @click="selectTemplate('TasksList')">
                        <div class="image"></div>
                        <div class="context">Tasks List</div>
                    </div>
                </div>
            </div>
            <modal :width="300" :height="172" v-if="showModal" @close-modal="getTemplateName">
                    <div class="modal-text" slot="modal-content">
                        <create-template-modal @close-modal="getTemplateName"/>
                    </div>
            </modal>
            <template-file v-show="openFile" :fileName="fileName" :fileType="templateType" />
        </div>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import Modal from './Modal.vue';
import CreateTemplateModal from './Modals/CreateTemplateModal.vue'
import TemplateFile from './TemplateFile.vue';

export default {
    name: 'CreateTemplates',
    components: {
        MainLayout,
        Modal,
        CreateTemplateModal,
        TemplateFile
    },
    data() {
        return {
            showModal: false,
            templateType: null,
            fileName: null,
            openFile: false
        };
    },
    methods: {
        selectTemplate(type) {
            this.templateType = type;
            this.showModal = true;
        },
        getTemplateName(name='') {
            this.showModal = false;
            if(name !== '') {
                this.openFile = true;
                this.fileName = name;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.title-container {
    width: 100%;
    text-align: left;
    padding: 20px 30px;
    box-sizing: border-box;
    .title {
        font-weight: bolder;
        font-size: 20px;
    }
    .description {
        font-size: 14px;
    }
    .image-container {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
        display: flex;
        margin-top: 30px;
    }
    .container {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px 0px, rgba(0, 0, 0, 0.3) 0px 1px 5px 0px;
        margin: 0 15px;
        overflow: hidden;
        cursor: pointer;
        .context {
            height: 30px;
            padding: 5px;
            box-sizing: border-box;
        }
        &:hover {
            opacity: 0.8;
        }
    }
    .container-1 {
        margin-left: 0;
        .image {
            background-image: url("../assets/Create-sprite.png");
            background-size: 240px 2610px;
            background-position: -10px -1050px;
            background-repeat: no-repeat no-repeat;
            width: 220px;
            height: 120px;
        }
    }
    .container-2 {
        .image {
            background-image: url("../assets/Create-sprite.png");
            background-size: 240px 2610px;
            background-position: -10px -1440px;
            background-repeat: no-repeat no-repeat;
            width: 220px;
            height: 120px;
        }
    }
    .container-3 {
        .image {
            width: 220px;
            height: 120px;
            background-image: url("../assets/Create-sprite.png");
            background-size: 240px 2610px;
            background-position: -10px -1180px;
            background-repeat: no-repeat no-repeat;
        }
    }
    .container-4 {
        .image {
            width: 220px;
            height: 120px;
            background-image: url("../assets/Create-sprite.png");
            background-size: 240px 2610px;
            background-position: -10px -1700px;
            background-repeat: no-repeat no-repeat;
        }
    }
}
</style>