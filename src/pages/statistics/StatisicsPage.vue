<template>
  <v-container>
    <CheckingCreate v-model="dialog" @addChecking="addChecking"/>


    <v-row>
      <v-col class="text-center">
        <h1>
          Статистика Администратора
        </h1>
      </v-col>
    </v-row>


    <v-row>
      <v-col class="text-right">
        <v-btn outlined @click="dialog=true">
          Создать проверку
        </v-btn>
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
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="listChecking"
              :search="search"
          >
            <template v-slot:item.progresCheck="{ item }">
              <v-progress-linear class="mb-3"
                                 item.v-model="valueProg"
                                 height="15"
                                 color="green">13 из 76
              </v-progress-linear>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                  small
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </v-card>


        <v-col
            md="8">
          <router-link to="/organisations">Наименование проверки 1</router-link>
          <v-progress-linear class="mb-3"
                             height="15"
                             color="green">13 из 76
          </v-progress-linear>
          <router-link to="">Наименование проверки 2</router-link>
          <v-progress-linear class="mb-3"
                             value="50"
                             height="15"
                             color="green">15 из 30
          </v-progress-linear>
        </v-col>

      </v-col>
      <v-col md="6" class="text-center">
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
                               color="green">13 из 76
            </v-progress-linear>
            <router-link to="">Наименование проверки 2</router-link>
            <v-progress-linear class="mb-3"
                               value="50"
                               height="15"
                               color="green">15 из 30
            </v-progress-linear>
          </v-col>
        </v-row>
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
        valueProg: 50,
        countQuest: "80",
        countAnser: "13",
      },
      {
        nameCheck: 'Проверка Ставрополь больницы',
        dateCheck: '22.08.2022',
        regionCheck: 'Ставропольский край',
        departmentCheck: 'Министерство здравоохранения',
        valueProg: 50,
        countQuest: "76",
        countAnser: "25",
      },
      {
        nameCheck: 'Проверка Краснодар музеи',
        dateCheck: '01.06.2022',
        regionCheck: 'Краснодарский край',
        departmentCheck: 'Министерство культуры',
        valueProg: 50,
        countQuest: "55",
        countAnser: "46",
      },
      {
        nameCheck: 'Проверка Ростов детсады',
        dateCheck: '30.08.2022',
        regionCheck: 'Ростовская область',
        departmentCheck: 'Министерство образования',
        valueProg: 50,
        countQuest: "80",
        countAnser: "76",
      },
    ],

  }),
  methods: {
    addChecking(checking) {
      console.log("Проверка 3")
      this.listChecking.push(checking)
    }
  }
}
</script>

<style scoped>

</style>