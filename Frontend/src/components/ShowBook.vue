<template>
  <v-app class="grey darken-4">
    <div>
      <v-toolbar class="grey darken-3">
        <v-toolbar-title>
          <router-link to="/">
            <v-img
              src="@/assets/logo.png"
              max-height="60"
              max-width="140"
              class="ml-15"
            ></v-img>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-item">
          <v-btn color="transparent" class="white--text" to="/login">
            Авторизація
          </v-btn>
          <v-btn color="transparent" class="white--text" to="/registration">
            Реєстрація</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <template>
      <div>
        <v-toolbar class="grey darken-4 d-flex justify-center mb-12">
          <v-toolbar-items class="nav-decoration">
            <router-link to="/books/category/artistic">
              <v-card-text> Художня</v-card-text>
            </router-link>
            <router-link to="/books/category/children">
              <v-card-text> Дитяча</v-card-text>
            </router-link>
            <router-link to="/books/category/manga">
              <v-card-text> Манґа</v-card-text>
            </router-link>
            <router-link to="/books/category/history">
              <v-card-text> Історія</v-card-text>
            </router-link>
            <router-link to="/books/category/english">
              <v-card-text> Англійська</v-card-text>
            </router-link>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>

    <template>
      <v-container>
        <v-row>
          <v-col md="3">
            <v-img
              class="img-style"
              :src="book.image"
            ></v-img>
          </v-col>
          <v-col>
            <v-card class="grey darken-4 white--text" outlined>
              <h2>Про що книга?</h2>
              <v-card-text
                class="grey darken-4 white--text text-h5 text-justify"
              >
               {{book.description}}
              </v-card-text>
              <div class="d-flex justify-end">
                <v-btn class="orange mt-15 mr-15" x-large rounded>
                  Купити
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
   name: "App",
  data: () => ({
    book: null,
  }),

  async created() {
    try {
      const response = await axios.get(
        "http://localhost:3000/book/" + this.$route.params.url
      );
      this.book = JSON.parse(response.data);
      console.log(this.book);
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style scoped>
.img-style {
  border-radius: 15px;
  border: 2px solid rgb(255, 150, 0);
}
</style>
