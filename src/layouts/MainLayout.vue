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
            </div>
            <div class="main"><slot name="main-content"></slot></div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
    name: 'MainLayout',
    components: {
        Sidebar
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
            .search-bar {
                width: 30%;
                border: 1px solid #eee;
                padding: 5px;
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
        }
        .main {
            // padding-top: 40px;
        }
    }
}
</style>