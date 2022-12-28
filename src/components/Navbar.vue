<template>
  <v-container fluid>
    <v-row>
      <v-app-bar app color="deep-purple accent-4" dark clipped-left>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer/>
        <v-btn outlined class="ml-3" @click="getAuthenticationApi">
          Авторизоваться
        </v-btn>
        <v-btn outlined class="ml-3">
          <router-link to="/">Главная</router-link>
        </v-btn>
        <v-btn outlined class="ml-3">
          <router-link to="/photo">Фото</router-link>
        </v-btn>
        <v-btn outlined class="ml-3">
          <router-link to="/statistics">Статистика</router-link>
        </v-btn>
        <v-btn class="ml-3" color="white">
          <router-link to="/debtors">Реестр должников</router-link>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer app permanent :expand-on-hover=true clipped mini-variant-width=40 width=200>
        <v-list nav dense>
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    </v-row>
  </v-container>
</template>

<script>
import {useAuthStore} from "@/stores/AuthStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data: () => ({
    group: null,
    authStore: useAuthStore(),
    userAuthentication: [
      {
        username: 'admin',
        password: '123456'
      }
    ],
    tok: {},

  }),
  mounted() {
    this.getAuthenticationApi()
  },
  methods: {
    getAuthenticationApi() {
      let username = this.userAuthentication[0].username;
      let password = this.userAuthentication[0].password;

      this.axios.post('http://localhost:8000/api/v1/auth/token/', {"username": username, "password": password})
          .then(response => this.tok = response.data)
        this.authStore.tokens.push(this.tok)
      }
    }
  }

</script>

<style scoped>



</style>