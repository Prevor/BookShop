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
        <div class="event-card" v-for="item in books" :key="item.id">
          <router-link :to="'/book/' + item.url">
            <div class="card-title">
              <h4>{{ item.name }}</h4>
            </div>
            <div class="card-image">
              <img :src="item.image" />
            </div>
          </router-link>
        </div>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data: () => ({
    books: null,
    category: null,
  }),
  async created() {
    try {
      const response = await axios.get(
        "http://localhost:3000/books/category/" + this.$route.params.category
      );
      this.books = JSON.parse(response.data);
    } catch (e) {
      this.errors.push(e);
    }
  },

  watch: {
    async $route(to, from) {
      try {
        const response = await axios.get(
          "http://localhost:3000/books/category/" + this.$route.params.category
        );
        this.books = JSON.parse(response.data);
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>

<style>
.v-toolbar__items {
  display: flex;
  height: inherit;
  color: white !important;
  gap: 2em;
}

.card-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.event-card {
  width: 320px;
  height: 500px;
  background: #141414;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 25px;
  margin-right: 25px;
  transition: all 0.2s linear;
  border: 2px solid transparent;
  cursor: pointer;
  color: white;
  display: inline-block;
  position: relative;
}

.event-card:hover {
  border: 2px solid rgb(255, 150, 0);
}

.card-title {
  height: 50px;
  margin-top: 5%;
  padding: 2px 26px;
  text-align: center;
}

img {
  border-style: none;
  position: absolute;
  width: 83%;
  height: 81%;
  left: 9%;
  top: 1%;
  border-radius: 15px;
}

.v-application a {
  color: #ffffff !important;
  text-decoration: none;
}

.nav-decoration > a > div {
  font-size: 18px !important;
  font-weight: bold !important;
  position: relative;
}

.nav-decoration > a > div:after {
  display: block;
  position: absolute;
  left: 15px;
  width: 0;
  height: 3px;
  background-color: rgb(255, 150, 0);
  content: "";
  transition: width 0.3s ease-out;
}

.nav-decoration > a > div:hover:after,
.nav-decoration > a > div:focus:after {
  width: 80%;
}
</style>
