import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

//axios.interceptor

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    data: [
      { main: JSON.parse(localStorage.getItem("main")) || [] },
      { house: JSON.parse(localStorage.getItem("house")) || [] },
      { study: JSON.parse(localStorage.getItem("study")) || [] },
      { work: JSON.parse(localStorage.getItem("work")) || [] },
    ],
    targets: ref([]),
    link: "Выберите задачу из списка справа",
    key: "main",
    targetsOpen: ref(false),
    point: ref(""),
    titlePoint: ref(""),
    date: "",
  }),
  actions: {
    sendTrue(e) {
      this.targets[e].uReady = !this.targets[e].uReady;
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
      let now = new Date();
      this.date = now.toLocaleDateString();
      return date;
    },
    // ?latitude=52.52&longitude=13.41&hourly=temperature_2m&format=json&timeformat=unixtime
    async getWeatherData(latitude, longitude, hourly, format, timeformat) {
      return await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: latitude,
          longitude: longitude,
          hourly: hourly,
          format: format,
          timeformat: timeformat,
        },
      });
    },
  },
});
