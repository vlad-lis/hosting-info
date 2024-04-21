<template>
  <div>
    <Form></Form>
    <v-divider></v-divider>
    <div v-if="loading" class="text-center mt-5">Loading...</div>
    <div v-else-if="error" class="text-center mt-5">{{ error }}</div>
    <v-container class="table-container" v-else>
      <v-row class="w-75" v-for="(value, key) in data[0]" :key="key">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
