<template>
  <div class="element">
    <q-item clickable>
      <q-item-section avatar>
        <q-icon name="home" color="indigo-7" class="targ__ico" />
      </q-item-section>

      <q-item-section class="name_layout">
        <q-item-label>Дела по дому</q-item-label>
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
  name: "HousePage",
});
function countPages() {
let counter = 0
if (!!taskStore.data[1].house) {
  counter = taskStore.data[1].house.length
}
return counter
}
</script>
