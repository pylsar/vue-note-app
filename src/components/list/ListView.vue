<script setup>
    import Sidebar from './Sidebar.vue';
    import AddNote from '../common/AddNote.vue';
</script>

<template>
    <div class="view-box">
        <div class="sidebar-box">
            <Sidebar/>
        </div>
        <div class="content-box">
            <AddNote />
        </div>
    </div>
</template>

<style scoped>
.view-box{
    display: flex;
    width: 100%;
    border: 1p[] solid red;
}

.sidebar-box{
    flex: .3;
    background: lime;
    min-width: 300px;
    height: calc(100vh - 50px);
}

.content-box{
  flex: .7;
  background: skyblue;
  height: calc(100vh - 50px);
}
</style>