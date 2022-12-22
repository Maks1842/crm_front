<template>
  <v-container fluid>
    <CheckingCreate v-model="dialog" @addChecking="addChecking"/>

    <v-row>
      <v-col class="text-center">
        <h1>
          Статистика Администратора
        </h1>
      </v-col>
    </v-row>

    <v-col class="text-center">
      <h2>
        Проверки
      </h2>
    </v-col>

    <v-row>
      <v-col md="6" class="text-center">
        <h3>
          Текущие:
        </h3>
        <v-card>
          <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
            ></v-text-field>
            <div>
              <v-btn outlined @click="dialog=true">
                Создать проверку
              </v-btn>
            </div>
          </v-card-title>
          <v-data-table dense :headers="headers" :items="listChecking" :search="search">
            <template v-slot:item.progresCheck="{ item }">
              <v-progress-linear class="mb-3" :value="item.countAnser / item.countQuest * 100" height="15" color="green">
                {{ item.countAnser }} из {{ item.countQuest }}
              </v-progress-linear>
            </template>

            <template v-slot:item.actions="">
              <router-link to="/organisations">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </router-link>

              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>

      </v-col>
      <v-col md="6" class="text-center">
        <h3>
          Завершенные:
        </h3>
<!--        <div>-->
<!--          {{ listCheckingComplited }}-->
<!--        </div>-->
        <v-card>
          <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table dense :headers="headers" :items="listCheckingComplited" :search="search">
            <template v-slot:item.progresCheck="{ item }">
              <v-progress-linear class="mb-3" :value="item.countAnser / item.countOrgAll * 100" height="15" color="green">
                {{ item.countAnser }} из {{ item.countOrgAll }}
              </v-progress-linear>
            </template>

            <template v-slot:item.actions="">
              <router-link to="/debtors">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </router-link>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import CheckingCreate from "@/components/statistics/CheckingCreate";

export default {
  name: "StatisicsPage",
  components: {CheckingCreate},
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: 'Проверка',
        value: 'nameCheck',
        // align: 'start' | 'center' | 'end',
        align: 'start',
        sortable: true,
        filterable: true,
        // groupable: boolean,
        // divider: boolean,
        // class: string | string[],
        // cellClass: string | string[],
        width: 150,
        // filter: (value: any, search: string, item: any) => boolean,
        // sort: (a: any, b: any) => number
      },
      {text: 'Дата', value: 'dateCheck', width: 50,},
      {text: 'Регион', value: 'regionCheck', width: 150,},
      {text: 'Департамент', value: 'departmentCheck', width: 150,},
      {text: 'Прогресс', value: 'progresCheck', width: 200,},
      { text: 'Редактор', value: 'actions', sortable: false },
    ],
    listChecking: [
      {
        nameCheck: 'Проверка Грозный школы',
        dateCheck: '15.10.2022',
        regionCheck: 'Чеченская республика',
        departmentCheck: 'Министерство образования',
        countQuest: 50,
        countAnser: 45,
      },
      {
        nameCheck: 'Проверка Ставрополь больницы',
        dateCheck: '22.08.2022',
        regionCheck: 'Ставропольский край',
        departmentCheck: 'Министерство здравоохранения',
        countQuest: 76,
        countAnser: 25,
      },
      {
        nameCheck: 'Проверка Краснодар музеи',
        dateCheck: '01.06.2022',
        regionCheck: 'Краснодарский край',
        departmentCheck: 'Министерство культуры',
        countQuest: 55,
        countAnser: 46,
      },
      {
        nameCheck: 'Проверка Ростов детсады',
        dateCheck: '30.08.2022',
        regionCheck: 'Ростовская область',
        departmentCheck: 'Министерство образования',
        countQuest: 80,
        countAnser: 76,
      },
    ],
    listCheckingComplited: [],
  }),
  mounted() {
    this.getCheckingApi()
  },
  computed: {
    localeDate() {
      // Конвертируем число в строку. Для этого существуют специальные методы
      // toLocaleDateString() или toLocaleString() или toLocaleTimeString()
      // Итоговая строка будет зависеть от локализации системы пользователя.
      // Для русской локали это будет "01.02.2020",
      // для американской "2/1/2020",
      // для немецкой — "1.2.2020"
      // Вы НЕ должны устанавливать формат даты самостоятельно
      return (new Date(this.date)).toLocaleDateString()
    },
  },
  methods: {
    addChecking(checking) {
      console.log("Проверка 3")
      this.listChecking.push(checking)
    },
    getCheckingApi(){
      let tokenAccess = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNzMxNTc5LCJqdGkiOiI3N2Y5MzNjNTg3NWU0MGQyYmE5M2RkMjQ3NDRmOGJkNiIsInVzZXJfaWQiOjF9.1Zh9lnelQYWk22Y3ZN6T3YxoJf0c73aWnRQb5Sdg_kY';
      this.axios.get('http://localhost:8000/api/v1/getCheckingsList/', { headers: {"Authorization" : `Bearer ${tokenAccess}`}, })
          .then(response => this.listCheckingComplited = response.data)
    }
  }
}
</script>

<style scoped>

</style>