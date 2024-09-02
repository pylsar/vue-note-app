<script setup>

    import { useNoteStore } from '@/stores/NoteStore';
    const props = defineProps(['notes', 'title', 'type']);
    const noteStore = useNoteStore();
</script>

<template>
    <div v-if="'list' === type">
        <h4>{{ title }}</h4>
    </div>
    <ul v-if="'list' === type">
        <li v-for="note in notes" :key="note.id">
            <span>{{note.title}}</span>
            <span v-if="!note.pinned" @click="noteStore.markedAsPinned( note.id)">Зафиксировать</span>
            <span v-if="note.pinned" @click="noteStore.markedAsUnpinned( note.id)">Отменить</span>
        </li>
        
    </ul>
</template>