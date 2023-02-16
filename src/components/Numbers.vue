<template>
  <div class="container">
    <div class="cold-md-4 offset-md-4">
      <form @submit.prevent="queryResults()" class="card card-body">
        <h1 class="text-center h3 mb-3">View Results</h1>

        <input
          type="number"
          placeholder="write a firts number"
          min="0"
          max="9"
          v-model="number.num1"
          class="form-control mb-3"
        />
        <input
          type="number"
          placeholder="write a second number"
          min="0"
          max="9"
          v-model="number.num2"
          class="form-control mb-3"
        />
        <input
          type="number"
          placeholder="write the third number"
          min="0"
          max="9"
          v-model="number.num3"
          class="form-control mb-3"
        />
        <input
          type="number"
          placeholder="write the fourth number"
          min="0"
          max="9"
          v-model="number.num4"
          class="form-control mb-3"
        />

        <button class="btn btn-primary">Save</button>
      </form>
      <ul
        class="list-group"
        v-for="response , index  in responses1"
        :key="index"
      >
        <li
          class="list-group-item list-group-item-action"
          style="cursor: pointer"
        >
          <!-- <h1> {{ response }}</h1> -->
        </li>
        <li
          class="list-group-item list-group-item-action"
          style="cursor: pointer"
        >
          <h1 class="h3">{{ response }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { INumber } from "../interface/numbers.interface";
import { postNumbers } from "../services/numberService";
export default defineComponent({
  data() {
    return {
      number: {} as INumber,
      responses1: [] as INumber[],
    };
  },
  methods: {
    async queryResults() {
      try {
        const res = await postNumbers(this.number);
        this.responses1 = res.data;
      } catch (e) {
        alert(e);
      }
    },
  },
});
</script>
