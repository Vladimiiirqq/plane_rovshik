<template>
  <div class="element">
    <q-item clickable>
      <q-item-section avatar>
        <q-icon name="star" color="indigo-7" class="targ__ico" />
      </q-item-section>

      <q-item-section class="name_layout">
        <q-item-label>Основные задачи</q-item-label>
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
  name: "MainPage",
});
function countPages() {
let counter = 0
if (!!taskStore.data[0].main) {
  counter = taskStore.data[0].main.length
}
return counter
}
</script>
