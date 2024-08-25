<script setup>
    const props = defineProps(['notes', 'title', 'type']);
</script>

<template>
    <div v-if="'list' === type">
        <h4>{{ title }}</h4>
    </div>
    <ul v-if="'list' === type">
        <li v-for="note in notes" :key="note.id">
            <span>{{note.title}}</span>
        </li>
        
    </ul>
</template>