import { defineStore } from "pinia";

export const useNoteStore = defineStore('noteStore', {

    state: () => ({
        notes: [
            {id:1, title: 'note one', comment: 'comment 1', timestamp: Date.now(), pinned: true},
            {id:2, title: 'note two', comment: 'comment 2', timestamp: Date.now(), pinned: false},
            {id:3, title: 'note three', comment: 'comment 3', timestamp: Date.now(), pinned: false},
            {id:4, title: 'note four', comment: 'comment 4', timestamp: Date.now(), pinned: true},
            {id:5, title: 'note fifve', comment: 'comment 5', timestamp: Date.now(), pinned: false}
        ]
    }),
    getters:{
        allNotes: (state) =>{
            return state.notes;
        },
        pinnedNotes: (state) => {
            return state.notes.filter(note => note.pinned );
        }
    }



})