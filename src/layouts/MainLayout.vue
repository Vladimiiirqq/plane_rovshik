<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header-stl">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="logo">
            <img src="~assets\logo.png" style="width: 10em" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      {{ averageTemp }}
      <q-list>
        <q-item-label header> Список вкладок </q-item-label>
        <MainPage @click="setTaskLink('main', 0)" />
        <HousePage @click="setTaskLink('house', 1)" />
        <StudyPage @click="setTaskLink('study', 2)" />
        <WorkPage @click="setTaskLink('work', 3)" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import MainPage from "components/MainPage.vue";
import HousePage from "components/HousePage.vue";
import StudyPage from "components/StudyPage.vue";
import WorkPage from "components/WorkPage.vue";
import { useTaskStore } from "stores/TaskStore";
import { onMounted } from "vue";

defineOptions({
  name: "MainLayout",
});

const taskStore = useTaskStore();
const leftDrawerOpen = ref(false);
const averageTemp = ref(0);

function setTaskLink(el, idx) {
  if (el == "main") {
    taskStore.key = el;
    taskStore.link = "Основные задачи";
    taskStore.targets = taskStore.data[idx].main;
  }
  if (el == "house") {
    taskStore.key = el;
    taskStore.link = "Дела по дому";
    taskStore.targets = taskStore.data[idx].house;
  }
  if (el == "study") {
    taskStore.key = el;
    taskStore.link = "Учеба";
    taskStore.targets = taskStore.data[idx].study;
  }
  if (el == "work") {
    taskStore.key = el;
    taskStore.link = "Работа";
    taskStore.targets = taskStore.data[idx].work;
  }
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
onMounted(async () => {
  const { data } = await taskStore.getWeatherData(
    13332.52,
    13.41,
    "temperature_2m",
    "json",
    "unixtime"
  );
  averageTemp.value =
    data.hourly.temperature_2m.reduce((acc, number) => acc + number, 0) /
    data.hourly.temperature_2m.length;
});
</script>

<style>
.header-stl {
  background: none;
  color: #000;
}
.logo {
  display: flex;
  justify-content: center;
  padding-right: 2em;
}
</style>
