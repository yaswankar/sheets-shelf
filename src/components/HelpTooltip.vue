<template>
    <div class="help-main">
        <h3>Tips - Browse</h3>
        <h4>Access and organize</h4>
        <ul>
            <li><p>Arrange sheets you create and those shared with you.</p></li>
            <li><p>Right click on the sheets-list to create folders and workspaces</p></li>
            <li><p>Click on Account on upper right to upload photo and add contacts.</p></li>
        </ul>
        <button class="close" @click="$emit('close-help')">Close</button>
    </div>
</template>

<script>
export default {
    name: 'HelpTooltip'
}
</script>

<style lang="scss" scoped>
.help-main {
    text-align: left;
    h3 {
        text-align: left;
        padding-left: 20px;
        font-size: 18px;
        font-weight: bolder;
    }
    h4 {
        text-align: left;
        padding-left: 20px;
        font-size: 16px;
        font-weight: bold;
    }
    ul {
        padding-right: 10px;
        li {
            font-size: 14px;
            font-weight: normal;
            &::marker {
                color: #09f;
                font-size: 24px;
            }
        }
    }
    .close {
        float: right;
        margin-right: 15px;
        background: #09f;
        width: 80px;
        height: 25px;
        color: #fff;
        border: 1px solid #09f;
        border-radius: 4px;
    }
}
</style>