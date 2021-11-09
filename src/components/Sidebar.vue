<template>
<aside class="sidebar">
    <nav class="sidebar-nav">
        <div class="sidebar-title"><i class="fas fa-bars" @click="collapsed"></i><span v-if="!collapse">Home</span></div>
        <ul>
            <router-link to="/">
                <li :title="collapse?'Dashboard': ''">
                    <div><i class="fas fa-box"></i> <span v-if="!collapse" class="">Dashboard</span></div>
                </li>
            </router-link>
            <router-link to="/sheets">
                <li :title="collapse?'Sheets': ''">
                    <div><i class="fas fa-book"></i> <span v-if="!collapse" class="">Sheets</span></div>
                </li>
            </router-link>
            <li :title="collapse?'Reports': ''">
                <div><i class="fas fa-clipboard"></i> <span v-if="!collapse" class="">Reports</span></div>
            </li>
            <li>
                <div><i class="fas fa-file"></i> <span v-if="!collapse">Option</span></div>
                <ul v-if="!collapse" class="nav-flyout">
                    <li>
                        <div>Option1</div>
                    </li>
                    <li>
                        <div>Option2</div>
                    </li>
                    <li>
                        <div>Option3</div>
                    </li>
                    <li>
                        <div>Option4</div>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</aside>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            collapse: false
        }
    },
    methods: {
        collapsed() {
            if(!this.collapse) {
                document.getElementsByClassName('mid-bar')[0].style.width='calc(100% - 4em)';
                document.getElementsByClassName('side-bar')[0].style.width='4em';
                document.getElementsByClassName('sidebar')[0].style.width='4em';
            } else {
                document.getElementsByClassName('mid-bar')[0].style.width='calc(100% - 17em)';
                document.getElementsByClassName('side-bar')[0].style.width='17em';
                document.getElementsByClassName('sidebar')[0].style.width='17em';
            }
            if(!this.collapse) {
                this.collapse = !this.collapse;
            } else {
                setTimeout(() => {
                    this.collapse = !this.collapse;
                }, 200);
            }
        }
    }
}
</script>

<style lang="scss">
/* -------------
Sidebar
----------------*/
.sidebar {
    position: absolute;
    //width: 33.3333%;
    width: 17em;
    height: 100%;
    transition: all 0.3s;
    top: 0;
    overflow:hidden;
    background-color: #19222a;
    transform: translateZ(0);
    visibility: visible;
    backface-visibility: hidden;
}

/* -------------
Sidebar Nav
----------------*/
.sidebar-nav {
    position: fixed;
    background-color: #19222a;
    height: 100%;
    font-weight: 400; 
    font-size: 1.2em;
    overflow: auto;
    padding-bottom: 6em;
    z-index: 9;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    .sidebar-title {
        color: white; 
        text-align: left; 
        height: 50px; 
        padding: 12px 15px; 
        box-sizing: border-box;
        i {
            font-size: 1.5em;
        }
        span {
            margin-left: 30px;
            position: relative;
            bottom: 4px;
        }
    }

    ul{
        list-style:none;
        display: block;
        padding: 0;
        margin: 0;
        text-align: left;
        cursor: pointer;
        .router-link-exact-active {
            li {
                background-color: rgba(0,0,0,0.9);
            }
        }
    li{
        margin-left: 0;
        padding-left: 0;
        display: inline-block;
        width: 100%;
        div {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            padding: 18px 15px;
            height: 60px;
            box-sizing: border-box;
            span {
                color: white;
                margin-left: 30px;
                text-align: center;
            }
            &:hover{
                background-color: rgba(0,0,0,0.9);
                transition: all 0.6s ease;
            }
        }
        div:first-child {
            span {
                margin-left: 26px;
            }
        }
    /* -------------
    Sidebar: icons
    ----------------*/
        i {
            font-size: 1.5em;
            width: 9em;
            display: inline;
            vertical-align:middle;
        }  
    }
    }
    /* -------------
    Nav-Flyout
    ----------------*/
    & .nav-flyout {
        position: absolute;
        background-color: #080D11;
        z-index: 9;
        left: 2.5em;
        top: 50px;
        height: 100vh;
        transform: (translateX(100%));
        transition: (all 0.5s ease);

        div:hover{
            background-color: rgba(255,255,255, 0.05)
        }
    }

    /* -------------
    Hover
    ----------------*/
    & ul > li:hover{
        .nav-flyout{
            transform:(translateX(0));
            transition:(all 0.5s ease);
        }
    }
}
</style>