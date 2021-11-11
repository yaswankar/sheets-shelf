<template>
    <div class="main-layout">
        <div class="side-bar">
            <Sidebar /> 
        </div>
        <div class="mid-bar">
            <div class="header">
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search">
                </div>
                <button class="upgrade">
                    <i class="fas fa-upload"></i>
                    <span>Upgrade</span>
                </button>
                <div class="app-title">Sheets Shelf</div>
                <div class="user-dropdown">
                    <button class="dropbtn" @click="showProfile = !showProfile" v-click-outside="closeProfile">
                        <div class="image">I</div>
                        <i class="fas fa-caret-down"></i>
                    </button>
                    <div v-if="showProfile" class="dropdown-content">
                        <router-link to="/profile"><a href="#">Profile</a></router-link>
                        <router-link to="/login"><a href="#">Logout</a></router-link>
                    </div>
                </div>
            </div>
            <div class="main"><slot name="main-content"></slot></div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
    name: 'MainLayout',
    data() {
        return {
            showProfile: false
        }
    },
    components: {
        Sidebar
    },
    methods: {
        closeProfile() {
            this.showProfile = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.main-layout {
    display: flex;
    .side-bar {
        width: 17em;
    }
    .mid-bar {
        width: calc(100% - 17em);
        .header {
            height: 50px;
            width: 100%;
            color: #fff;
            text-align: left;
            box-sizing: border-box;
            padding: 7px 10px;
            background: #09f;
            display: flex;
            .search-bar {
                width: 30%;
                border: 1px solid #eee;
                padding: 10px 5px;
                border-radius: 5px;
                background: #fff;
                .fa-search {
                    color: #09f;
                }
                input {
                    margin-left: 15px;
                    color: #4d4d4d;
                    background: inherit;
                    border: none;
                    &:focus {
                        outline: none;
                    }
                    &::placeholder {
                        color: #fff;
                    }
                }
            }
            .upgrade {
                width: 100px;
                background: #04AA6D;
                color: #fff;
                border: 1px solid #04AA6D;
                box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                font-weight: 600;
                box-sizing: border-box;
                margin-left: 10px;
                span {
                    margin-left: 5px;
                }
            }
            .app-title {
                margin-left: 20px;
                padding: 6px 10px;
                font-weight: bold;
                font-size: 18px;
            }
            .user-dropdown {
                position: absolute;
                right: 10px;
                display: inline-block;
                .dropbtn {
                    color: white;
                    padding: 0 10px;
                    font-size: 16px;
                    border: none;
                    background: inherit;
                    cursor: pointer;
                    display: flex;
                    .image {
                        width: 35px;
                        height: 35px;
                        font-weight: bold;
                        padding: 10px;
                        box-sizing: border-box;
                        border-radius: 50%;
                        background: white;
                        color: #09f;
                    }
                    i {
                        margin-left: 10px;
                        position: relative;
                        top: 10px;
                    }
                }
                .dropdown-content {
                    position: absolute;
                    right: 0;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    a {
                        color: black;
                        padding: 5px;
                        text-decoration: none;
                        display: block;
                        &:hover {background-color: #f1f1f1;}
                    }
                }
            }

        }
        .main {
            // padding-top: 40px;
        }
    }
}
</style>