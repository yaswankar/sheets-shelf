<template>
    <div>
        <main-layout>
            <div class="main-container" slot="main-content">
                <div class="title">
                    <i class="fas fa-folder"></i>
                    <span>Sheets</span>
                    <span class="help">
                        <i class="fas fa-question" @click="toggleHelp" v-click-outside="closeHelp"></i>
                        <span class="popuptext" id="myPopup" v-if="popupVisible">
                            <help-tooltip @close-help="toggleHelp"/>
                        </span>
                        </span>
                </div>
                <div class="selectors">
                    <input type="checkbox" @change="selectAll" v-model="allSelected"/>
                    <button class="actions-dropdown">
                        <span>Actions</span>
                        <i class="fas fa-caret-down"></i>
                    </button>
                    <button :class="['delete', {'disabled': !allSelected}]">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="create-btn">
                        <span>Create</span>
                        <i class="fas fa-caret-down"></i>
                    </button>
                </div>
                <div class="sheets-table-div">
                    <table class="sheets-table">
                        <thead>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Name</td>
                            <td>Shared Status</td>
                            <td>Owner</td>
                            <td>Last Updated</td>
                        </thead>
                        <tr v-for="(row, index) in rowData" :key="index">
                            <td><input type="checkbox" v-model="row.selected"></td>
                            <td @click="row.checked = !row.checked"><i :class="['fa-star', {'fas checked': row.checked, 'far': !row.checked}]"></i></td>
                            <td>{{row.name}}</td>
                            <td>{{row.shared ? row.shared: 'Not Shared'}}</td>
                            <td>{{row.owner}}</td>
                            <td>{{row.lastUpdated}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import HelpTooltip from '../components/HelpTooltip.vue';

export default {
    name: 'Sheets',
    data() {
        return {
            allSelected: false,
            popupVisible: false,
            rowData: [
                {
                    name: 'Sheet One',
                    owner: 'Amaar',
                    lastUpdated: '29-04-1998',
                    selected: false,
                    checked: false
                },
                {
                    name: 'Sheet Two',
                    owner: 'Amaar',
                    lastUpdated: '29-04-1998',
                    selected: false,
                    checked: false
                },
                {
                    name: 'Sheet Three',
                    owner: 'Amaar',
                    lastUpdated: '29-04-1998',
                    selected: false,
                    checked: false
                }
            ]
        }
    },
    components: {
        MainLayout,
        HelpTooltip
    },
    methods: {
        selectAll() {
            if(this.allSelected) this.rowData.forEach(row => row.selected = true);
            else this.rowData.forEach(row => row.selected = false);
        },
        toggleHelp() {
            this.popupVisible = !this.popupVisible;
        },
        closeHelp() {
            this.popupVisible = false;
        }
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
        .help {
            float: right;
            font-size: 16px;
            position: relative;
            &:hover {
                color: #09f;
            }
            .popuptext {
                width: 350px;
                height: 300px;
                background-color: rgb(255, 255, 255);
                border-radius: 2px;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
                text-align: center;
                border-radius: 6px;
                padding: 8px 0;
                position: absolute;
                z-index: 1;
                top: 30px;
                left: 50%;
                margin-left: -340px;
                -webkit-animation: fadeIn 1s;
                animation: fadeIn 1s;
            }

                /* Add animation (fade in the popup) */
                @-webkit-keyframes fadeIn {
                    from {opacity: 0;} 
                    to {opacity: 1;}
                }

                @keyframes fadeIn {
                    from {opacity: 0;}
                    to {opacity:1 ;}
                }
        }
    }
    .selectors {
        .actions-dropdown, .create-btn {
            .fas {
                color: var(--icon-color);
                margin-left: 10px;
            }
        }
        .delete, .actions-dropdown, .create-btn {
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
        .create-btn {
            float: right;
        }
        .disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
    .sheets-table-div {
        width: 100%;
        margin-top: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        .sheets-table {
            width: 100%;
            border-collapse: collapse;
            thead {
                height: 35px;
                font-weight: 500;
                background-color: rgb(226, 223, 223);
                font-size: 16px;
                td {
                    border-right: 1px solid #ccc;
                    padding-left: 10px;
                }
            }
            tr {
                height: 30px;
                border-bottom: 1px solid #ccc;
                background: rgb(243, 242, 242);
                font-size: 14px;
                td {
                    padding-left: 10px;
                }
                td:first-child, td:nth-child(2) {
                    width: 30px;
                }
                .checked {
                    color: #09f;
                }
            }
        }
    }
}
</style>