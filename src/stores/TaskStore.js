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
    // targetsOpen: ref(false),
    // points: ref([]),
    // titlePoint: ref(""),
    // labelBtn: ref(""),
    // point: ref(""),
    // now: new Date(),
    // date: now.toLocaleDateString(),
    // data: JSON.parse(localStgetItem("main")),
    
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

    // setTasksCounter(val, index) {
    //   this.counters[index] = val
    // },
    
    // toggleDrawer() {
    //   targetsOpen.value = !targetsOpen.value;
    // console.log(key)
    
    // },
    // sendTrue(e) {
    //   points.value[e].uReady = !points.value[e].uReady
    //   localStorage.setItem("main", JSON.stringify(points.value));
    // },
    
    // savePoint() {
    //   if (!point.value) return;
    //   points.value.push({
    //     uPoint: point.value,
    //     uTitle: titlePoint.value,
    //     uTime: date,
    //     uReady: ref(false),
    //   });
    //   localStorage.setItem("main", JSON.stringify(points.value));
    //   taskStore.setTasksCounter(points.value.length, 0)
    
    //   point.value = "";
    //   titlePoint.value = "";
    // },
    
    
    
    
    // delPoint(index) {
    //   points.value.splice(index, 1);
    //   localStorage.setItem("main", JSON.stringify(points.value));
    // },
    // labelB() {
    //   labelBtn.value =
    //     targetsOpen.value == false ? "Добавить цель" : "Закрыть меню";
    //   }
    
  }
})

