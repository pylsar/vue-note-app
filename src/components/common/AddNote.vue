<script setup>
import {ref} from 'vue';
import contenteditable from 'vue-contenteditable';

const title = ref('');
const content = ref('');

const handleForm = (e) => {
    console.log(e)
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