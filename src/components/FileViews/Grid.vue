<template>
    <div>
        <options-header :fileName="fileName" @add-row="insertRow" />
        <div class="grid-container">
            <div class="header">
                <div class="empty">&nbsp;</div>
                <div class="sno">&nbsp;</div>
                <div class="task-name">Task Name</div>
                <div class="due-date">Due date</div>
                <div class="done">Done</div>
                <div class="assigned-to">Assigned To</div>
                <div class="status">Status</div>
                <div class="comments">Comments</div>
            </div>
            <div class="content-container">
                <div v-for="(item, index) in array" :key="index" :class="['content', {'selected': item.selected}]">
                    <div class="empty" @click="selectRow(index)">&nbsp;</div>
                    <div class="sno">{{index+1}}</div>
                    <div contenteditable :value="item.name" @input="changeVal($event, index, 'name')" :class="['task-name', {'finished': item.completed}]"></div>
                    <div class="due-date"></div>
                    <div class="done"><input type="checkbox" v-model="item.completed"></div>
                    <div class="assigned-to">
                        <select name="user-selector" v-model="item.user" id="user-selector">
                            <option v-for="(user, key) in assigneeOptions" :key="key" :value=key>{{user}}</option>
                        </select>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="status">
                        <select name="status-selector" v-model="item.status" id="status-selector">
                            <option v-for="status in statusOptions" :key="status" :value=status>{{status}}</option>
                        </select>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div contenteditable :value="item.comments" @input="changeVal($event, index, 'comments')"  :class="['comments', {'finished': item.completed}]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OptionsHeader from '../OptionsHeader';
export default {
    name: 'Grid',
    props: ['fileName'],
    components: {
        OptionsHeader
    },
    data() {
        return {
            array: [
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
                { name: '', completed: false, status: 'Open', comments: '', selected: false},
            ],
            statusOptions: ['Open', 'In Progress', 'Resolved', 'Verified'],
            assigneeOptions: {user1: 'AAA', user2: 'BBBBBBBBB', user3: 'CCCCCCC', user4: 'DDDDDDD'},
        };
    },
    methods: {
        changeVal(evt, index, key) {
            this.array[index][key]= evt.target.innerText;
        },
        insertRow() {
            this.array.push({ name: '', completed: false, status: 'Open', comments: '', selected: false})
        },
        selectRow(index) {
            this.array.forEach((item, ind) => {
                if(ind === index) item.selected = true;
                else item.selected = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-container {
    text-align: left;
    background: rgba(228, 228, 228, 0.4);
    margin-top: 20px;
    .header {
        display: flex;
        padding: 10px 10px 0 10px;
        width: 100%;
        box-sizing: border-box;
        div {
            padding: 5px 5px 0px 10px;
            box-sizing: border-box;
            height: 35px;
            font-weight: 600;
            color: rgb(68,68,68);
            border-right: 1px solid rgb(215, 215, 215);
        }
        .empty {
            min-width: 20px;
        }
        .sno {
            min-width: 50px;
            text-align: right;
        }
        .task-name {
            min-width: 300px;
        }
        .due-date {
            min-width: 100px;
        }
        .done {
            min-width: 70px;
        }
        .assigned-to {
            min-width: 180px;
        }
        .status {
            min-width: 120px;
        }
        .comments {
            min-width: 300px;
        }
    }
    .content-container {
        height: calc(100vh - 162px);
        overflow-y: auto;
        width: 100%;
        overflow-x: hidden;
        .content {
            display: flex;
            padding: 0px 10px 0 10px;
            width: 100%;
            &:hover {
                div {
                    background: rgba(0, 153, 255, 0.1);
                    select {
                        background: rgba(0, 153, 255, 0.05);
                    }
                }
                .empty {
                    background: rgb(0, 153, 255);
                }
            }
            .finished {
                text-decoration: line-through;
            }
            div {
                padding: 2px 5px 0px 10px;
                box-sizing: border-box;
                height: 25px;
                background: white;
                font-weight: 400;
                font-size: 14px;
                color: rgb(68,68,68);
                border-right: 1px solid rgb(215, 215, 215);
                border-bottom: 1px solid rgb(215, 215, 215);
                select {
                    padding: 1px 5px;
                    width: 100%;
                    font-size: 14px;
                    border: 1px solid #eee;
                    height: 100%;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                i {
                    position: absolute;
                    right: 10px;
                    top: 5px;
                    color: grey;
                }
                &:focus-visible {
                    background: #fff;
                }
            }
            .empty {
                min-width: 20px;
                border: none;
                background: rgba(228, 228, 228, 0.4);
            }
            .sno {
                min-width: 50px;
                text-align: right;
            }
            .task-name {
                min-width: 300px;
            }
            .due-date {
                min-width: 100px;
            }
            .done {
                min-width: 70px;
            }
            .assigned-to {
                min-width: 180px;
                padding: 0;
                position: relative;
            }
            .status {
                min-width: 120px;
                padding: 0;
                position: relative;
            }
            .comments {
                min-width: 300px;
            }
        }
        .selected {
            div {
                background: rgba(0, 153, 255, 0.2);
                select {
                    background: rgba(0, 153, 255, 0.1);
                }
            }
            .empty {
                background: rgb(0, 153, 255);
            }
        }
    }
}
</style>