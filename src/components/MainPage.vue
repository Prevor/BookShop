<template>
  <v-app class="grey darken-4">
    <div>
      <v-toolbar class="grey darken-3">
        <v-toolbar-title>
          <v-img
              src="@/assets/logo.png"
              max-height="60"
              max-width="140"
          ></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn> Авторизація</v-btn>
          <v-btn> Реєстрація</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <template>
      <div>
        <v-toolbar class="grey darken-4 d-flex justify-center">
          <v-toolbar-items>
            <v-card-text> Художня</v-card-text>
            <v-card-text> Дитяча</v-card-text>
            <v-card-text> Манґа</v-card-text>
            <v-card-text> Історія</v-card-text>
            <v-card-text> Англійська</v-card-text>

          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>

    <template>
      <v-container>
        <v-flex d-flex>
          <v-layout wrap>
            <v-flex mx-5 mt-5 xl2 lg2 md-4 sm-6 xs-12  v-for="item in books" :key="item.id">
              <v-card class="card-container">
                <v-img
                    height="256"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <span>{{ item.text }}</span>
                lorem500
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>


        <!--    <v-row>-->
        <!--      <template v-for="n in 4">-->
        <!--        <v-col :key="n" >-->
        <!--          <v-card  class="pa-2"-->
        <!--            outlined-->
        <!--            tile>-->
        <!--            Книга-->
        <!--          </v-card>-->
        <!--        </v-col>-->
        <!--        <v-responsive-->
        <!--          v-if="n === 4"-->
        <!--          :key="`width-${n}`"-->
        <!--           width="100%"-->
        <!--        ></v-responsive>-->
        <!--      </template>-->
        <!--    </v-row>-->
      </v-container>
    </template>


  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    books: [
      { image: "", text: "Book 1", link: ""},
      { image: "", text: "Book 2", link: ""},
      { image: "", text: "Book 3", link: ""},
      { image: "", text: "Book 4", link: ""},
      { image: "", text: "Book 4", link: ""},
      { image: "", text: "Book 5", link: ""},
      { image: "", text: "Book 6", link: ""},
      { image: "", text: "Book 7", link: ""},
      { image: "", text: "Book 8", link: ""},
      { image: "", text: "Book 9", link: ""},
      { image: "", text: "Book 10", link: ""},
      { image: "", text: "Book 11", link: ""},
      { image: "", text: "Book 12", link: ""},
      { image: "", text: "Book 13", link: ""},
      { image: "", text: "Book 14", link: ""},
      { image: "", text: "Book 15", link: ""},
    ]
  }),
};
</script>

<style>
.v-btn:not(.v-btn--round).v-size--default {
  color: white;
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-toolbar__items {
  display: flex;
  height: inherit;
  color: white !important;
  gap: 2em;
  flex-wrap: nowrap;
}

</style>
