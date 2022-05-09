<template>
  <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-card width="500" class="mx-auto">
      <v-form v-model="valid" class="pa-10 mt-10" ref="form" lazy-validation>
        <v-layout class="d-flex flex-column">
          <v-flex xs12 md-2>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Ім'я"
              required
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 md-2>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Прізвище"
              required
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 md-2>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Пошта"
              required
            ></v-text-field>
          </v-flex>
          <v-icon>mdi-face-male</v-icon>
          <v-flex xs12 md-2>
            <v-slider
              @change="checkSlider()"
              value="16"
              :rules="ageRules"
              id="slider"
              color="blue"
              label="Вік"
              hint="Be honest"
              min="1"
              max="120"
              thumb-label
              class="mt-3"
              required
            ></v-slider>
          </v-flex>

          <v-flex>
            <v-radio-group
              row
              label="Стать"
              style="font-size: 16px !important"
              class="mt-0"
              required
            >
              <v-radio
                label="Чоловік"
                class="ml-10"
                value="radio-1"
                color="blue"
              >
              </v-radio>
              <v-icon>mdi-face-man</v-icon>
              <v-radio label="Жінка" value="radio-2" color="pink" class="ml-10">
              </v-radio>
              <v-icon>mdi-face-woman</v-icon>
            </v-radio-group>
          </v-flex>

          <v-flex>
            <v-autocomplete
              :rules="[() => !!country || 'This field is required']"
              v-model="select"
              item-text="name"
              :items="country"
              outlined
              dense
              label="Країна"
              required
            >
              <template v-slot:item="slotProps" required>
                <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
                {{ slotProps.item.name }}
              </template>
            </v-autocomplete>
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
              required
            >
            </v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              v-model="password1"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[required, min6, matchingPasswords]"
              prepend-icon="mdi-lock-outline"
              :type="show2 ? 'text' : 'password'"
              label="Повторіть пароль"
              hint="Не менше 8 символів"
              counter
              @click:append="show2 = !show2"
              required
            >
            </v-text-field>
          </v-flex>

          <v-flex class="text-center">
            <v-btn
              rounded
              color="primary"
              dark
              width="200"
              @click="validate"
            >
              Зареєструватись
            </v-btn>

            <v-snackbar v-model="snackbar">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-flex>
          <v-flex class="text-center mt-5">
            <v-card-text>Уже маєте обліковий запис?</v-card-text>
          </v-flex>
          <v-flex class="text-center">
            <v-btn :to="{ name: 'authorization' }"> Вхід </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-img>
</template>

<script>
export default {
  name: "FormRegistration",
  data: () => ({
    password: "",
    password1: "",
    successPass: false,
    successPass1: false,
    show1: false,
    show2: false,
    valid: true,
    select: null,
    firstname: "",
    lastname: "",
    errorMessages: "",
    email: "",
    snackbar: false,
    text: `Ви успішно зареєструвались`,
    country: [
      { name: "Україна", flag: "em-flag-ua" },
      { name: "США", flag: "em-flag-us" },
      { name: "Іспанія", flag: "em-flag-es" },
      { name: "Франція", flag: "em-flag-mf" },
      { name: "Польша", flag: "em-flag-pl" },
      { name: "Англія", flag: "em-flag-england" },
      { name: "Російський військовий корабель, йди на…й", flag: "em-flag-ru" },
    ],

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid",
    ],

    ageRules: [(val) => val >= 16 || `I don't believe you!`],
  }),
  methods: {
    required: function (value) {
      if (value) {
        return true;
      } else {
        return "This field is required.";
      }
    },
    min6: function (value) {
      if (value.length >= 8) {
        return true;
      } else {
        return "Password should have more than 6 characters.";
      }
    },
    matchingPasswords: function () {
      if (this.password === this.password1) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },
    validate() {
      this.$refs.form.validate()
      this.snackbar = this.$refs.form.validate();
      
    },
    computed: {
      passRule: function () {
        if (this.password === "") {
          this.successPass = false;
          return "";
        } else if (this.min6(this.password) === true) {
          this.successPass = true;
          return "mdi-check";
        } else {
          this.successPass = false;
          return "mdi-close";
        }
      },

      passRule1: function () {
        if (this.password1 === "") {
          this.successPass1 = false;
          return "";
        } else if (
          this.min6(this.password1) === true &&
          this.matchingPasswords() === true
        ) {
          this.successPass1 = true;
          return "mdi-check";
        } else {
          this.successPass1 = false;
          return "mdi-close";
        }
      },
    },
  },
};
</script>
