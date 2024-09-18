<template>
  <div class="element">
    <q-item clickable>
      <q-item-section avatar>
        <q-icon name="school" color="indigo-7" class="targ__ico" />
      </q-item-section>

      <q-item-section class="name_layout">
        <q-item-label>Учеба</q-item-label>
      </q-item-section>

      <div v-show="countPages() !== 0" class="counter_tasks">
        <div class="counter">
          {{ countPages() }}
        </div>
      </div>
    </q-item>
  </div>
</template>

<script setup>
import { useTaskStore } from "stores/TaskStore";

const taskStore = useTaskStore();
defineOptions({
  name: "StudyPage",
});

function countPages() {
let counter = 0
if (!!taskStore.data[2].study) {
  counter = taskStore.data[2].study.length
}
return counter
}
</script>
