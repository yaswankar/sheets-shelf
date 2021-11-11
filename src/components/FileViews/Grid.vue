<template>
    <div>
        <div class="options-bar">
            <div class="left-section">
                <button>File</button>
                <button>Automation</button>
                <button>Forms</button>
                <button class="add-row" @click="insertRow">Add Row</button>
            </div>
            <div class="right-section">
                <button>
                    <i class="fas fa-users"></i>
                    <span>Share</span>
                </button>
            </div>
        </div>
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
                <div v-for="(item, index) in array" :key="index" class="content">
                    <div class="empty">&nbsp;</div>
                    <div class="sno">{{index+1}}</div>
                    <div contenteditable :value="item.name" @input="changeVal($event, index, 'name')" :class="['task-name', {'finished': item.completed}]"></div>
                    <div class="due-date"></div>
                    <div class="done"><input type="checkbox" v-model="item.completed"></div>
                    <div class="assigned-to">
                        <select name="user-selector" v-model="item.user" id="user-selector">
                            <option v-for="(user, key) in assigneeOptions" :key="key" :value=key>{{user}}</option>
                        </select>
                    </div>
                    <div class="status">
                        <select name="status-selector" v-model="item.status" id="status-selector">
                            <option v-for="status in statusOptions" :key="status" :value=status>{{status}}</option>
                        </select>
                    </div>
                    <div contenteditable :value="item.comments" @input="changeVal($event, index, 'comments')"  :class="['comments', {'finished': item.completed}]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Grid',
    data() {
        return {
            array: [
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
                { name: '', completed: false, status: 'Open', comments: ''},
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
            this.array.push({ name: '', completed: false, status: 'Open', comments: ''})
        }
    }
}
</script>

<style lang="scss">
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
            }
            span {
                margin-left: 5px;
            }
        }
    }
}
.grid-container {
    text-align: left;
    background: rgba(228, 228, 228, 0.4);
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
        height: calc(100vh - 145px);
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
            }
            .status {
                min-width: 120px;
            }
            .comments {
                min-width: 300px;
            }
        }
    }
}
</style>