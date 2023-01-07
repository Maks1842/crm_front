<template>
  <v-container fluid>
      <v-app-bar color="indigo lighten-1" dark app clipped-left>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer/>
        <v-btn icon @click="getAuthenticationApi">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer  app clipped permanent expand-on-hover mini-variant mini-variant-width=50 width=220>
        <v-list nav dense>
          <v-list-item-group
              v-model="group"
              active-class="indigo lighten-4"
          >

            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Реестр должников</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/debtor">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-card-account-details</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Карточка должника</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/payments">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Платежи</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/mail">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email-sync</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Почта</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/library">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-library</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Библиотека</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/statistics">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-finance</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Статистика</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/org-structure">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-sitemap</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Оргструктура</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/settings">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Настройки</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/photo">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-image-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Фотографии</v-list-item-title>
              </v-list-item>
            </router-link>


          </v-list-item-group>
        </v-list>

      </v-navigation-drawer>
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
    token: '',

  }),
  methods: {
    getAuthenticationApi() {
      let username = this.userAuthentication[0].username;
      let password = this.userAuthentication[0].password;

//Авторизация, получение auth_token токена
      const t = this.axios.post('http://localhost:8000/api/v1/auth/token/login/', {"password": password, "username": username})
          .then(response => this.token = response.data);
      console.log("token =" + this.token.auth_token);

      (async () => {
        const meta = await t;
        console.log("meta =" + meta.auth_token);
        this.authStore.token.push(meta.auth_token);

      })();

      //Отправляю refresh токен, чтобы получить новый access. С задержкой (1 минута = 60000)
      // setInterval(async () => {
      //   //Очищаю store от предыдущих записей
      //   useAuthStore().$reset();
      //
      //   const tA= this.axios.post('http://localhost:8000/api/v1/auth/token/refresh/', {"refresh": this.tokens.refresh,})
      //       .then(response => response.data);
      //
      //   const tokAccess = await tA;
      //   this.authStore.access.push(tokAccess.access);
      //   // console.log("access 2 =" + tokAccess.access);
      // }, 300000)
    }
  }
}

</script>

<style scoped>


</style>