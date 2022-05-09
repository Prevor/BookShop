<template>
  <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-card width="500" class="mx-auto" ref="form">
      <v-form v-model="valid" class="pa-10 mt-10">
        <v-layout class="d-flex flex-column">
          <v-flex xs12 class="ml-8">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Пошта"
              required
            ></v-text-field>
            <div>
              sdfsf
            </div>
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
          <v-flex class="text-center">
            <v-btn color="primary" dark> Вхід </v-btn>
          </v-flex>
          <v-flex class="text-center mt-5">
            <v-card-text>Обліковий запис відсутній?</v-card-text>
          </v-flex>
          <v-flex class="text-center">
            <v-btn :to="{ name: 'registration' }"  v-on="submit" > Зареєструватись </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-img>
</template>
