<template>
  <v-form class="hosting-form" @submit.prevent="submitForm">
    <v-select
      v-model="selectedType"
      :items="types"
      label="Select Request Type"
    ></v-select>
    <v-text-field v-model="url" label="URL" :rules="urlRules"></v-text-field>
    <v-btn class="mt-3" type="submit" color="primary" :disabled="!isValidUrl">
      Fetch
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "Hosting Data",
      url: "",
    };
  },
  computed: {
    types() {
      return ["Hosting Data", "Tech Data"];
    },
    isValidUrl() {
      return this.urlRules.every((rule) => rule(this.url) === true);
    },
    urlRules() {
      return [
        (v) => !!v || "URL is required",
        (v) => isValidUrl(v) || "Invalid URL",
      ];
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

function isValidUrl(url) {
  const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[^.\s]+\.[^.\s]+$/i;
  return urlRegex.test(url);
}
</script>

<style scoped>
.hosting-form {
  max-width: 400px;
  margin: 50px auto;
}
</style>
