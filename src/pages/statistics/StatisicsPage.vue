<template>
  <v-container>

    <v-row>
      <v-col class="text-center">
        <h1>
          Статистика Администратора
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-right">
      <v-btn
          outlined
      >
        <router-link to="/organisations">Создать проверку</router-link>
      </v-btn>
      </v-col>
    </v-row>

    <v-col class="text-center">
      <h2>
        Проверки
      </h2>
    </v-col>

    <v-row>
      <v-col md="4">
        <h3>
          Текущие:
        </h3>
        <v-row>
          <v-col
              md="8">
            <router-link to="/organisations">Наименование проверки 1</router-link>
            <v-progress-linear class="mb-3"
                value="15"
                height="15"
                color="green">13 из 76</v-progress-linear>
            <router-link to="">Наименование проверки 2</router-link>
            <v-progress-linear class="mb-3"
                value="50"
                height="15"
                color="green">15 из 30</v-progress-linear>
          </v-col>
        </v-row>

      </v-col>
      <v-col md="4">
        <h3>
          Завершенные:
        </h3>
        <v-row>
          <v-col
              md="8">
            <router-link to="">Наименование проверки 1</router-link>
            <v-progress-linear class="mb-3"
                value="15"
                height="15"
                color="green">13 из 76</v-progress-linear>
            <router-link to="">Наименование проверки 2</router-link>
            <v-progress-linear class="mb-3"
                value="50"
                height="15"
                color="green">15 из 30</v-progress-linear>
          </v-col>
        </v-row>
      </v-col>
    </v-row>







  </v-container>
</template>

<script>
export default {
  name: "StatisicsPage"
}
</script>

<style scoped>

</style>