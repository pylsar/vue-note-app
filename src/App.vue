<script setup>
  import ToolBar  from './components/common/ToolBar.vue';
  import ListView from  './components/list/ListView.vue'
</script>

<template>
  <div class="main-wrapper">
    <div class="toolbar-view">
      <ToolBar/>
    </div>
    <div class="list-view">
      <ListView />
    </div>
  </div>
</template>

<style scoped>

/* .list-view{
  width: 30%;
  background: orange;
  min-width: 300px;
  height: calc(100vh - 50px);
} */
</style>
