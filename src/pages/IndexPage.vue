<template>
  <div class="page__all">
    <div
      class="no_set_pages"
      v-if="
        taskStore.targets.length == 0 &&
        taskStore.link == 'Выберите задачу из списка справа'
      "
    >
      <div class="no_set_pages_text">Выберите вкладку из списка справа...</div>
    </div>

    <div
      class="page__header"
      v-if="
        taskStore.link !== 'Выберите задачу из списка справа'
      "
    >
      <div class="page__name">{{ taskStore.link }}</div>
    </div>
    <div
      class="page__body"
      v-if="
        taskStore.link !== 'Выберите задачу из списка справа'
      "
    >
      <div class="page__body-color">
        <div class="page__body-bord">
          <div
            class="new__point-none"
            v-if="
              taskStore.targets.length == 0 &&
              taskStore.link !== 'Выберите задачу из списка справа'
            "
          >
            На данный момент задач нет
          </div>
          <div
            class="points"
            v-for="(el, id) in taskStore.targets"
            :key="el.id"
          >
            <div class="new__point">
              <div class="processed" @click="taskStore.sendTrue(id)">
                <div class="ready" v-if="el.uReady == true">
                  <q-icon name="task_alt" />
                </div>
                <div class="no__ready" v-else>
                  <q-icon name="radio_button_unchecked" />
                </div>
              </div>
              <div class="complete" v-if="el.uReady == true">ВЫПОЛНЕНО</div>
              <div class="new__point-st">
                <div class="new__point-name" add-targ-inp>
                  {{ el.uPoint }}
                </div>
                <div class="new__point-text">
                  {{ el.uTitle }} • {{ el.uTime }}
                </div>
              </div>
              <div class="del__point">
                <q-btn
                  outline
                  round
                  color="red-5"
                  icon="delete"
                  @click="taskStore.delPoint(id)"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="addElem"
          v-if="taskStore.link !== 'Выберите задачу из списка справа'"
        >
          <div class="addtarg" id="add-targ-div" v-show="taskStore.targetsOpen">
            <div class="inp">
              <q-input
                outlined
                v-model="taskStore.point"
                @keypress.enter="taskStore.savePoint"
                label="Цель"
                lazy-rules
                id="add-targ-inp"
                :rules="[(val) => (val && val.length > 0) || 'Пропишите цель']"
              />
            </div>
            <div class="inp2">
              <q-input
                outlined
                v-model="taskStore.titlePoint"
                @keypress.enter="taskStore.savePoint"
                label="Описание цели"
                id="add-targ-desc"
              />
            </div>
            <div class="addbtn">
              <q-btn
                color="primary"
                icon="add"
                @click="taskStore.savePoint()"
                style="width: 55px; height: 55px"
              />
            </div>
          </div>
          <div class="btnComeTarg" @click="taskStore.toggleDrawer(), taskStore.setData()">
            <q-icon name="add" />
            Добавить цель
          </div>
          <div class="pick_cat" v-if="taskStore.targets == 0">
            <img src="~assets\cat.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "stores/TaskStore";

const taskStore = useTaskStore();

defineOptions({
  name: "IndexPage",
});
</script>
