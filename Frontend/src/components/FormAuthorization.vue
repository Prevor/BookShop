<template>
  <v-app class="grey darken-4">
    <v-card width="500" class="mx-auto mt-15" ref="form">
      <v-form v-model="valid" class="pa-10">
        <v-layout class="d-flex flex-column">
            <h2>Авторизація</h2>
          <v-flex xs12 >
            <v-text-field
               prepend-icon="mdi-email-outline"
              v-model="email"
              :rules="emailRules"
              label="Пошта"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[required, min6]"
              prepend-icon="mdi-lock-outline"
              :type="show1 ? 'text' : 'password'"
              label="Введіть пароль"
              hint="Не менше 8 символів"
              counter
              @click:append="show1 = !show1"
            >
            </v-text-field>
          </v-flex>
          <v-flex class="text-center ">
            <v-btn color="orange black--text" dark> Вхід </v-btn>
          </v-flex>
          <v-flex class="text-center mt-5">
            <v-card-text>Обліковий запис відсутній?</v-card-text>
          </v-flex>
          <v-flex class="text-center">
            <v-btn :to="{ name: 'registration' }" class="black--text"  v-on="submit"> Зареєструватись </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-app>
</template>
<style>
h2 {
  text-align: center;
}</style>
