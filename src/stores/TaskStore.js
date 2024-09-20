import { defineStore } from 'pinia'
import { ref } from "vue";


export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    counters: [0,0,0,0],
    data: [
      {main: JSON.parse(localStorage.getItem("main")) || []},
      {house: JSON.parse(localStorage.getItem("house")) || []},
      {study: JSON.parse(localStorage.getItem("study")) || []},
      {work: JSON.parse(localStorage.getItem("work")) || []},
    ],
    targets: ref([]),
    link: 'Выберите задачу из списка справа',
    key: 'main',
    targetsOpen: ref(false),
    point: ref(""),
    titlePoint: ref(""),
    date: '',
  }),
  actions: {
    sendTrue(e) {
      this.targets[e].uReady = !this.targets[e].uReady
      localStorage.setItem(this.key, JSON.stringify(this.targets));
    },
    delPoint(index) {
      this.targets.splice(index, 1);
      localStorage.setItem(this.key, JSON.stringify(this.targets));
    },
    savePoint() {
      if (!this.point) return;
      this.targets.push({
        uPoint: this.point,
        uTitle: this.titlePoint,
        uTime: this.date,
        uReady: ref(false),
      });
      localStorage.setItem(this.key, JSON.stringify(this.targets));
    
      this.point = "";
      this.titlePoint = "";
    },
    toggleDrawer() {
      this.targetsOpen = !this.targetsOpen;
    },
    setData() {
      let now = new Date()
      this.date = now.toLocaleDateString()
      return date
    }
  }
})

