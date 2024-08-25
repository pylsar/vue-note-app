<script setup>
</script>

<template>
    <div class="block-note-row">
        <div class="block-note-row-line">
            <span>Блокнот</span>
        </div>
        <div class="block-note-row-line">
            <span>Редактировать</span>
            <span>Удалить</span>
        </div>
        <div class="block-note-row-line">
            <span>Поиск</span>
            <span>Линия</span>
            <span>Сетка</span>
        </div>
    </div>
</template>

<style>
    .block-note-row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: orange;
        height: 50px;
    }

    .block-note-row-line{
        display: flex;
        align-items: center;
    }
        
    .block-note-row-line span{
        padding-left: 10px;
    }
</style>
