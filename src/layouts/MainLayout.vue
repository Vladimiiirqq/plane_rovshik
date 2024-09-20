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

        <q-toolbar-title >
          <div class="logo">
            <img src="~assets\logo.png" style="width: 10em;"/>
          </div>
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        Список вкладок
        </q-item-label>
        <MainPage @click="setTaskLink('main', 0)"/>
        <HousePage @click="setTaskLink('house', 1)"/>
        <StudyPage @click="setTaskLink('study', 2)"/>
        <WorkPage @click="setTaskLink('work', 3)"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import MainPage from 'components/MainPage.vue'
import HousePage from 'components/HousePage.vue'
import StudyPage from 'components/StudyPage.vue'
import WorkPage from 'components/WorkPage.vue'
import {useTaskStore} from "stores/TaskStore";
const taskStore = useTaskStore()

defineOptions({
  name: 'MainLayout'
})

function setTaskLink(el, idx) {
  if (el == 'main') {
    taskStore.key = el
    taskStore.link = 'Основные задачи'
    taskStore.targets = taskStore.data[idx].main
  }
  if (el == 'house') {
    taskStore.key = el
    taskStore.link = 'Дела по дому'
    taskStore.targets = taskStore.data[idx].house
  }
  if (el == 'study') {
    taskStore.key = el
    taskStore.link = 'Учеба'
    taskStore.targets = taskStore.data[idx].study
  }
  if (el == 'work') {
    taskStore.key = el
    taskStore.link = 'Работа'
    taskStore.targets = taskStore.data[idx].work
  }
}

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
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