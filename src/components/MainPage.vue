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
          <v-btn> Авторизація </v-btn>
          <v-btn> Реєстрація </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <template>
      <div>
        <v-toolbar class="grey darken-4 d-flex justify-center">
          <v-toolbar-items>
            <v-card-text> Художня </v-card-text>
            <v-card-text> Дитяча </v-card-text>
            <v-card-text> Манґа </v-card-text>
            <v-card-text> Історія </v-card-text>
            <v-card-text> Англійська </v-card-text>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>
 
<template>
  <v-container>
    <v-row>
      <template v-for="n in 4">
        <v-col :key="n" >
          <v-card  class="pa-2"
            outlined
            tile>
            Книга
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 4"
          :key="`width-${n}`"
           width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>



    <!-- <template>
      <v-card class="white mt-16" max-width="200">
        <h3>Популярні категорії</h3>
        <v-container>
          <v-checkbox label="Журнали"> </v-checkbox>

          <v-checkbox> </v-checkbox>

          <v-checkbox> </v-checkbox>

          <v-checkbox> </v-checkbox>

          <v-checkbox> </v-checkbox>

          <v-checkbox> </v-checkbox>

          <v-checkbox> </v-checkbox>
        </v-container>
      </v-card>
    </template> -->

  </v-app>
</template>

<script>
export default {};
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
    color: white!important;
    gap: 2em;
    flex-wrap: nowrap;
}

</style>
