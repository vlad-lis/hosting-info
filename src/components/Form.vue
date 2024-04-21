<template>
  <v-form class="hosting-form" @submit.prevent="submitForm">
    <v-select
      v-model="selectedType"
      :items="types"
      label="Select Request Type"
    ></v-select>
    <v-text-field v-model="url" label="URL"></v-text-field>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
      url: "",
    };
  },
  computed: {
    types() {
      return ["Hosting Data", "Tech Data"];
    },
  },
  methods: {
    submitForm() {
      this.$store.dispatch("fetchData", {
        type: this.selectedType,
        url: this.url,
      });
    },
  },
};
</script>

<style scoped>
.hosting-form {
  max-width: 400px;
  margin: 50px auto;
}
</style>
