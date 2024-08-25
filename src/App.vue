<script setup>
  import ToolBar  from './components/common/ToolBar.vue';
  import ListView from  './components/list/ListView.vue'
</script>

<template>
  <div>
    <ToolBar/>
  </div>
  <div class="list-view">
    <ListView />
  </div>
</template>

<style scoped>

.list-view{
  width: 30%;
  background: lime;
  min-width: 300px;
  height: calc(100vh - 50px);
}
</style>
