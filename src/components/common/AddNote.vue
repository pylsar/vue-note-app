<script setup>
import {ref} from 'vue';
import {useNoteStore} from '@/stores/NoteStore';
import contenteditable from 'vue-contenteditable';
import {v4 as uuidv4} from 'uuid';

const title = ref('');
const content = ref('');

const noteStore = useNoteStore();

const handleForm = (e) => {
    let insertId = noteStore.lastNoteId;

    if(0 < title.value.length && '' === insertId){
        insertId = uuidv4();

        let newObj = {
            id: insertId,
            title: title.value,
            comment: content.value,
            timestamp: Date.now(),
            pinned: false

        }

        noteStore.addNote(newObj);

        title.value = '';
        content.value = '';
    }
}
</script>

<template>
    <div class="add-note">
        <form @submit.prevent="handleForm">
            <input type="text" placeholder="what is it about" v-model="title">

            <contenteditable
                tag="div"
                :contenteditable="true"
                :no-html="true"
                :no-nl="false"
                v-model="content"
            />

            <button><span>Сохранить</span></button>
        </form>
    </div>    
</template>