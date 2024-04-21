<template>
  <div>
    <Form></Form>
    <v-divider></v-divider>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center">{{ error }}</div>
    <v-data-table v-else :headers="headers" :items="data" item-key="key"
      ><template #bottom v-if="!showFooter"></template
    ></v-data-table>
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
    headers() {
      if (this.data.length > 0) {
        return Object.keys(this.data[0]).map((key) => ({
          text: key,
          value: key,
        }));
      }
      return [];
    },
  },
};
</script>
