<template>
  <v-container fluid>
    <v-row>
      <v-app-bar
          color="deep-purple accent-4"
          dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer/>
        <v-btn outlined class="ml-3">Главная</v-btn>
        <v-btn outlined class="ml-3">Фото</v-btn>

      </v-app-bar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar"
}
</script>

<style scoped>

</style>