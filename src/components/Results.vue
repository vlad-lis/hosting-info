<template>
  <div>
    <Form></Form>
    <div v-if="loading" class="text-center mt-5">Loading...</div>
    <div v-else-if="error" class="text-center mt-5">{{ error }}</div>
    <v-container v-else class="table-container" v-for="result in data">
      <v-row class="w-75" v-for="(value, key) in result" :key="key">
        <v-col>{{ key }}</v-col>
        <v-col>{{ value }}</v-col>
        <v-divider></v-divider>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Form from "@/components/Form.vue";

export default {
  components: {
    Form,
  },
  computed: {
    ...mapState(["loading", "error", "data"]),
  },
};
</script>

<style scoped>
.table-container {
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
