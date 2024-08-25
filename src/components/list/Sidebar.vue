<script setup>
    import ListItem from '../partials/ListItem.vue';
    import { useNoteStore } from '@/stores/NoteStore';

    const noteStore = useNoteStore();
</script>
<template>
    <div>
        <ListItem :notes="noteStore.allNotes" :title="`all Notes`" :type="`list`"/>
    </div>
</template>